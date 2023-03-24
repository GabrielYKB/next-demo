import React from "react";

export default function Product({ product }) {
    return (
        <div>
            This is a product page for a product with an id
            <h1>{product.title}</h1>
            <p>{product.price}</p>
        </div>
    );
}

export async function getStaticPaths() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    return {
        paths: data.map((product) => ({ params: { id: product.id + "" } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch("https://fakestoreapi.com/products/" + params.id);
    const data = await res.json();

    return {
        props: {
            product: data,
        },
    };
}
