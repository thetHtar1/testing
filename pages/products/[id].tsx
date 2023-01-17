import { GetStaticPathsContext } from "next";
import { useRouter } from "next/router";
import { productType } from "./index";
export const getStaticPaths = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json();

    const products = data.products

    const paths = products.map((products: productType) => {
        return {
            params: {
                id: products.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }

}
export const getStaticProps = async(context:GetStaticPathsContext)=>{
    const id= context.params?.id
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()

    return{
        props:{
            product :data
        }
    }
}


const ProductDescriptionPage = ({product}:{product:productType}) => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            <h1>Product ID : {id}</h1>
            <h5>Title: {product.title}</h5>
            <p>Description: {product.description}</p>
            <p>price: {product.price}</p>
            <p>discountPercentage: {product.discountPercentage}</p>
            <p>rating: {product.rating}</p>
            <p>stock: {product.stock}</p>
            <p>brand: {product.brand}</p>
            <p>category: {product.category}</p>
            <img src={product.thumbnail} alt="product image"/>
            {product.images.map((image)=>(
                <img src={image} alt={`product Image ${product.images.indexOf(image)}`}/>
            )
                
            )}

        </div>
    )
}
export default ProductDescriptionPage;