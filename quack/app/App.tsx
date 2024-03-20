import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Carrinho from "./components/Carrinho"
import ProductList from "./components/ProductList"
import { useState } from "react"

export default function Home() {
  const [viewCart, setViewCart] = useState<boolean>(false)
  
  const pageContent = viewCart ? <Carrinho /> : <ProductList />
  
  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  )
  
  return content

}