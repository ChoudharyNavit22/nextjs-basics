import { notFound } from "next/navigation"

export const dynamicParams = true // default val = true

export async function generateStaticParams() {
  const res = await fetch('http://localhost:8000/products')

  const products = await res.json()
 
  return products.map((product) => ({
    id: product.id
  }))
}

async function getProduct(id) {

    const res = await fetch(`http://localhost:8000/products/${id}`, {
      next: {
        revalidate: 60
      }
    })
  
    if (!res.ok) {
        notFound()
      }

    return res.json()
  }
  
  
  export default async function ProductDetails({ params }) {

    const product = await getProduct(params.id)
  
    return (
      <main>
        <nav>
          <h2>Product Details</h2>
        </nav>
        <div className="card">
          <h3>{product.title}</h3>
          <small>Company: {product.company}</small>
          <p>{product.body}</p>
          <p>Price: ${product.price}</p>
          {
                product.featured ? <div className={`pill featured`}>
                Hot Deal
              </div> : null
            }
        </div>
      </main>
    )
  }