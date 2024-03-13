import Image from "next/image";
import Link from "next/link";
import patotestes from "@/Images/imgPato.png"

export default function Home() {
  return (
    <main className="bg-yellow-50">
      <Image src= {patotestes} alt="imagem"></Image>
      <h1 className ="text-yellow-500 text-opacity-100 text-center text-5xl font-sans font-semibold">Store</h1>
      <Link href="/about">About</Link>
      <Link href="/carrinho"> Carrinho</Link>
    </main>
  );
}
