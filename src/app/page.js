import HomeClient from "@/components/HomeClient";

// import './globals.css'

// https://fakestoreapi.com/products
// https://dummyjson.com/products

// async function getProducts() {
//   const res = await fetch("https://fakestoreapi.com/products", {
//     cache: "no-store",
//   });

//   return res.json();
// }


async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

    return data.products;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  const categories = [
    ...new Set(products.map((item) => item.category)),
  ];

  return (
    <HomeClient products={products} categories={categories} />
  );
}