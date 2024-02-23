import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Quack</h1>
      <Link href="/about">About</Link>
      <Link href="/carrinho"> Carrinho</Link>
    </main>
  );
}
