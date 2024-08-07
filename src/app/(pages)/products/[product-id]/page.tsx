import styles from "./page.module.css";

type ProductProps = {
    params: {"product-id": string}
}

export default function Product({params}: ProductProps) {
    return <section>
        Product
    </section>
}