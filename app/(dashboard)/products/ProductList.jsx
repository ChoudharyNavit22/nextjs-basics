import Link from "next/link"

async function getProducts() {

    // imitate delay
  await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch('http://localhost:8000/products', {
      next: {
        revalidate: 0 // use 0 to opt out of using cache
      }
    })
  
    return res.json()
  }

export default async function ProductList() {
    const products = await getProducts()

    return (
        <>
      {products.map((product) => (
        <div key={product.id} className="card my-5">
          <Link href={`/products/${product.id}`}>
            <h3>{product.title}</h3>
            <p>{product.body.slice(0, 200)}...</p>
            <p>Company: {product.company}</p>
            <p>Price: ${product.price}</p>
            {
                    product.featured ? <div className={`pill featured`}>
                    Hot Deal
                </div> : null
                }
          </Link>
        </div>
      ))}
      {products.length === 0 && (
        <p className="text-center">No products available</p>
      )}
    </>
    )
}