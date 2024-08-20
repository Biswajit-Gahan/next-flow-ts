import styles from "./products.module.css";
import {Metadata} from "next";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import CONFIG from "@/utils/configurations/config";
import helpers from "@/utils/helpers/helpers";
import {cookies} from "next/headers";
import {redirect, RedirectType} from "next/navigation";

export const metadata: Metadata = {
    title: "Products",
}

type ProductType = {
    productId: string,
    productName: string,
    productDescription: string,
    productPrice: string,
    productImage: string,
}

const fakeProducts: ProductType[] = [
    {
        productId: "1",
        productName: "Product 1",
        productDescription: "Product description 1",
        productPrice: "Rs.745",
        productImage: "https://images.pexels.com/photos/27457297/pexels-photo-27457297/free-photo-of-woman-standing-in-dress-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "2",
        productName: "Product 2",
        productDescription: "Product description 2",
        productPrice: "Rs.645",
        productImage: "https://images.pexels.com/photos/27457297/pexels-photo-27457297/free-photo-of-woman-standing-in-dress-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "3",
        productName: "Product 3",
        productDescription: "Product description 3",
        productPrice: "Rs.345",
        productImage: "https://images.pexels.com/photos/27457297/pexels-photo-27457297/free-photo-of-woman-standing-in-dress-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "4",
        productName: "Product 4",
        productDescription: "Product description 4",
        productPrice: "Rs.445",
        productImage: "https://images.pexels.com/photos/27457297/pexels-photo-27457297/free-photo-of-woman-standing-in-dress-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "5",
        productName: "Product 5",
        productDescription: "Product description 5",
        productPrice: "Rs.545",
        productImage: "https://images.pexels.com/photos/27457297/pexels-photo-27457297/free-photo-of-woman-standing-in-dress-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "6",
        productName: "Product 6",
        productDescription: "Product description 6",
        productPrice: "Rs.645",
        productImage: "https://images.pexels.com/photos/27457297/pexels-photo-27457297/free-photo-of-woman-standing-in-dress-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "7",
        productName: "Product 7",
        productDescription: "Product description 7",
        productPrice: "Rs.745",
        productImage: "https://images.pexels.com/photos/27457297/pexels-photo-27457297/free-photo-of-woman-standing-in-dress-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "8",
        productName: "Product 8",
        productDescription: "Product description 8",
        productPrice: "Rs.845",
        productImage: "https://images.pexels.com/photos/27457297/pexels-photo-27457297/free-photo-of-woman-standing-in-dress-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "9",
        productName: "Product 9",
        productDescription: "Product description 9",
        productPrice: "Rs.945",
        productImage: "https://images.pexels.com/photos/27457297/pexels-photo-27457297/free-photo-of-woman-standing-in-dress-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
]



function ProductCard ({product}: {product: ProductType}) {
    return <div className={styles.productCardContainer}>
            <Image className={styles.productImage} src={product.productImage} alt={"product image"} width={100} height={100} draggable={"false"} />
            <div className={styles.productLinkContainer}>
                <a className={styles.productLink} href={`${CONFIG.PATHS_CONFIG.DEFAULT_PATHS.product(product.productId)}`} >{product.productName}</a>
                <span className={styles.productPrice}>{product.productPrice}</span>
            </div>
    </div>
}

export default async function Products() {

    return <section className={styles.container}>
        <Navbar />
        <div className={styles.wrapper}>
            <div className={styles.filterContainer}>
                <div className={styles.searchContainer}>
                    <input className={styles.searchInput} type="text" placeholder={"Search a product"}/>
                    <button className={styles.addButton} type={"button"}>Add new item</button>
                </div>

                <div className={styles.filterWrapper}>
                    <div className={styles.selectWrapper}>
                        <select className={styles.filterSelect} name={"short"} defaultValue={""}>
                            <option value={""} disabled={true}>Short By</option>
                            <option value="asc">Low to high</option>
                            <option value="desc">High to low</option>
                            <option value="new">Newest</option>
                            <option value="old">Oldest</option>
                        </select>
                    </div>

                    <div className={styles.selectWrapper}>
                        <select className={styles.filterSelect} name={"filter"} defaultValue={""}>
                            <option value={""}>Filter by size</option>
                            <option value="l">Large</option>
                            <option value="m">Medium</option>
                            <option value="s">Small</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.productsWrapper}>
                <div className={styles.productCardsWrapper}>
                    {
                        fakeProducts.map((product, index) => {
                            return <ProductCard key={index} product={product} />
                        })
                    }
                </div>
            </div>
        </div>
    </section>
}