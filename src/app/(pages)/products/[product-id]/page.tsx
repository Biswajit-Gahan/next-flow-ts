import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

type ProductProps = {
    params: {"product-id": string}
}

export default function Product({params}: ProductProps) {
    return <section className={styles.container}>
        <Navbar />
        <section className={styles.wrapper}>
            <Image className={styles.productImage} src={"https://images.pexels.com/photos/27457297/pexels-photo-27457297/free-photo-of-woman-standing-in-dress-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt={"product image"} width={500} height={500} />
            <div className={styles.descriptionWrapper}>
                <p className={styles.productName}>Product Name</p>
                <p className={styles.productDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p className={styles.productPrice}>Rs. 640</p>
                <button className={styles.buyNowButton}>Buy Now</button>
            </div>
        </section>
    </section>
}