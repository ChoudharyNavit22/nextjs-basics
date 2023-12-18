import { Suspense } from "react";
import ProductList from "./ProductList";
import Loading from "../loading";

export default function Products() {
    return (
        <main>
            <nav>
                <div>
                <h2>Products</h2>
                <p><small>Currently available products</small></p>
                </div>
            </nav>
            <Suspense fallback={<Loading />}>
                <ProductList />
            </Suspense>
        </main>
    )
}