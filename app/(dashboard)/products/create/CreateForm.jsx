"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [price, setPrice] = useState(0)
  const [company, setCompany] = useState('')
  const [featured, setFeatured] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e)  => {
    e.preventDefault()
    setIsLoading(true)

    const newProduct = { title, body, price: parseInt(price), company, featured }
    console.log(newProduct);

    const res = await fetch('http://localhost:3000/api/products', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newProduct)
    })

    const resData = await res.json()

    if (resData.error) {
      console.log(error.message)
    }
    if (resData.data) {
      router.refresh()
      router.push('/products')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          required 
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Description:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Company:</span>
        <input
          required 
          type="text"
          onChange={(e) => setCompany(e.target.value)}
          value={company}
        />
      </label>
      <label>
        <span>Price:</span>
        <input
          required 
          type="number"
          min={0}
          max={1000} 
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        >
        </input>
      </label>
      <div className="flex items-center mb-4">
            <input
                id="featured-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="checkbox"
                defaultChecked={featured}
                onChange={(e) => setFeatured(current => !current)}
                value={featured}
            />
            <label htmlFor="featured-checkbox" className="ms-2">Hot Deal</label>
      </div>
      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
      {isLoading && <span>Creating...</span>}
      {!isLoading && <span>Create Product</span>}
    </button>
    </form>
  )
}