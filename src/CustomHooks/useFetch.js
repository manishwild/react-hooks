import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const result = await response.json()
    setProducts(result)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [url])
  
  return {loading, products}
}
