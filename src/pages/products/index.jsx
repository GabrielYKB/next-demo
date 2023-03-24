import Card from "@/components/Card";
import Head from "next/head";
import Link from "next/link";

export default function index({ products }) {
    return (
        <div>
            <Head>
                <title>Hej från denna sida</title>
            </Head>
            <h1>This page is about products </h1>

            <div>
                {products.map((product) => (
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        style={{
                            padding: "10px",
                            display: "block",
                            margin: "5px",
                        }}
                    >
                        {product.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return {
        props: {
            products: data,
        },
        revalidate: 10,
    };
}
