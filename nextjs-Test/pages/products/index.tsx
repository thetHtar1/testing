import styles from "./products.module.css";
import Link from "next/link";
export type productType ={
    id: number,
      title: string,
      description: string,
      price: number,
      discountPercentage:number,
      rating: number,
      stock: number,
      brand: string,
      category: string,
      thumbnail: string,
      images: string[]
}

type productPageProductType={
    products:productType[]
}

export const getStaticProps =async()=>{
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json();
    
    const products =data.products

    return{
        props:{
            products
        }
    }
}

const Products =({products}:productPageProductType)=>{
    console.log(products)
    return(
        <div>
            <h1>Products</h1>
            <div>
                {products.map((product)=>{
                    return(
                        <Link href={`/products/${product.id}`}>
                            <div className={styles.productCard} key={product.id}>
                            <img src={product.thumbnail} alt={'product image'} width={50} height={50}/>
                            {product.title}
                        </div>
                        </Link>

                    )
                })}
            </div>
        </div>
    )
}

export default Products;
