import { products } from "./data"
import Link from "next/link";

const productList = () => {
    return <>
    {
    <ul>
        {
        products.map(product => <li key={product.id}><Link href={`/p/${product.slug}`}>{product.brand} - {product.name}</Link>
        </li>
        )
}
    </ul>

}
    </>
}

export default productList;