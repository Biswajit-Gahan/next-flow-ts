import styles from "./products.module.css";
import {Metadata} from "next";
import Navbar from "@/components/navbar/navbar";

export const metadata: Metadata = {
    title: "Products",
}

const fakeProducts = [
    {
        productId: "1",
        productName: "Product 1",
        productDescription: "Product description 1",
        productPrice: "Rs.745",
        productImage: "https://images.pexels.com/photos/27396757/pexels-photo-27396757/free-photo-of-a-man-in-a-black-shirt-and-jeans-standing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "2",
        productName: "Product 2",
        productDescription: "Product description 2",
        productPrice: "Rs.645",
        productImage: "https://images.pexels.com/photos/27396757/pexels-photo-27396757/free-photo-of-a-man-in-a-black-shirt-and-jeans-standing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "3",
        productName: "Product 3",
        productDescription: "Product description 3",
        productPrice: "Rs.345",
        productImage: "https://images.pexels.com/photos/27396757/pexels-photo-27396757/free-photo-of-a-man-in-a-black-shirt-and-jeans-standing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "4",
        productName: "Product 4",
        productDescription: "Product description 4",
        productPrice: "Rs.445",
        productImage: "https://images.pexels.com/photos/27396757/pexels-photo-27396757/free-photo-of-a-man-in-a-black-shirt-and-jeans-standing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "5",
        productName: "Product 5",
        productDescription: "Product description 5",
        productPrice: "Rs.545",
        productImage: "https://images.pexels.com/photos/27396757/pexels-photo-27396757/free-photo-of-a-man-in-a-black-shirt-and-jeans-standing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "6",
        productName: "Product 6",
        productDescription: "Product description 6",
        productPrice: "Rs.645",
        productImage: "https://images.pexels.com/photos/27396757/pexels-photo-27396757/free-photo-of-a-man-in-a-black-shirt-and-jeans-standing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "7",
        productName: "Product 7",
        productDescription: "Product description 7",
        productPrice: "Rs.745",
        productImage: "https://images.pexels.com/photos/27396757/pexels-photo-27396757/free-photo-of-a-man-in-a-black-shirt-and-jeans-standing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "8",
        productName: "Product 8",
        productDescription: "Product description 8",
        productPrice: "Rs.845",
        productImage: "https://images.pexels.com/photos/27396757/pexels-photo-27396757/free-photo-of-a-man-in-a-black-shirt-and-jeans-standing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        productId: "9",
        productName: "Product 9",
        productDescription: "Product description 9",
        productPrice: "Rs.945",
        productImage: "https://images.pexels.com/photos/27396757/pexels-photo-27396757/free-photo-of-a-man-in-a-black-shirt-and-jeans-standing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
]

export default function Products() {
    return <section>
        <Navbar />
        <div>
            <div>Products Filters</div>
            <div>All Products</div>
        </div>
    </section>
}