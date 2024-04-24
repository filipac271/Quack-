import Image from "next/image";
import patoLGBT from "@/Images/PatoLGBT.png"
import { carrinhoL, tendencias, classicos, animais, profissoes, herois} from '@/app/components/ListaProdutos';





 export default function Home() {
  return (
      <main className="overflow-x-hidden">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-200 flex flex-row gap-x-60">
          <Image className="transform size-100" src={patoLGBT} alt="imagem"></Image>
          <h1 className="text-black text-opacity-100 text-5xl font-serif font-thin underline decoration-black decoration-1 underline-offset-8 flex items-center">Resolvemos todos os teus code-problems!</h1>
        </div>
        <div>
         <h1 className="mt-20 text-left ml-10 text-5xl font-serif font-thin margin"> Tendências: </h1>
         <div className="mt-10 mb-10 grid grid-cols-4 gap-4 justify-center">
           {tendencias.map((produto) => (
             <div key={produto.nome} className="hover:underline hover:font-semibold">
               <Image className="hover:shadow-2xl" src={produto.imagem} alt={produto.nome} />
               <h1 className="text-center font-mono text-xl">{produto.nome}</h1>
               <h1 className="text-center font-mono text-xl">{produto.preco}</h1>
             </div>
           ))}
         </div>
       </div>
       <div>
        <h1 className="mt-20 text-left ml-10 text-5xl font-serif font-thin margin">Patos Clássicos:</h1>
        <div className="mt-10 mb-10 grid grid-cols-4 gap-4 justify-center">
          {classicos.map((produto) => (
             <div key={produto.nome} className="hover:font-semibold flex flex-col items-center group">
               <Image className="hover:shadow-2xl" src={produto.imagem} alt={produto.nome} />
               <h1 className="group-hover:underline text-center font-mono text-xl">{produto.nome}</h1>
               <h1 className="group-hover:underline text-center font-mono text-xl">{produto.preco}</h1>
               <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-4 py-2 rounded invisible group-hover:visible">Adicionar ao carrinho</button>
             </div>
            ))}
           </div>
       </div>
       <div>
        <h1 className="mt-20 text-left ml-10 text-5xl font-serif font-thin margin"> Animais </h1>
        <div className="mt-10 mb-10 grid grid-cols-4 gap-4 justify-center">
          {animais.map((produto) => (
             <div key={produto.nome} className="hover:font-semibold flex flex-col items-center group">
               <Image className="hover:shadow-2xl" src={produto.imagem} alt={produto.nome} />
               <h1 className="group-hover:underline text-center font-mono text-xl">{produto.nome}</h1>
               <h1 className="group-hover:underline text-center font-mono text-xl">{produto.preco}</h1>
               <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-4 py-2 rounded invisible group-hover:visible">Adicionar ao carrinho</button>
             </div>
           ))}
         </div>
       </div>
       <div>
        <h1 className="mt-20 text-left ml-10 text-5xl font-serif font-thin margin"> Patos Trabalhadores </h1>
        <div className="mt-10 mb-10 grid grid-cols-4 gap-4 justify-center">
          {profissoes.map((produto) => (
             <div key={produto.nome} className="hover:font-semibold flex flex-col items-center group">
               <Image className="hover:shadow-2xl" src={produto.imagem} alt={produto.nome} />
               <h1 className="group-hover:underline text-center font-mono text-xl">{produto.nome}</h1>
               <h1 className="group-hover:underline text-center font-mono text-xl">{produto.preco}</h1>
               <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-4 py-2 rounded invisible group-hover:visible">Adicionar ao carrinho</button>
             </div>
           ))}
         </div>
       </div>
       <div>
        <h1 className="mt-20 text-left ml-10 text-5xl font-serif font-thin margin"> Super-Patos </h1>
        <div className="mt-10 mb-10 grid grid-cols-4 gap-4 justify-center">
          {herois.map((produto) => (
             <div key={produto.nome} className="hover:font-semibold flex flex-col items-center group">
               <Image className="hover:shadow-2xl" src={produto.imagem} alt={produto.nome} />
               <h1 className="group-hover:underline text-center font-mono text-xl">{produto.nome}</h1>
               <h1 className="group-hover:underline text-center font-mono text-xl">{produto.preco}</h1>
               <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-4 py-2 rounded invisible group-hover:visible">Adicionar ao carrinho</button>
             </div>
           ))}
         </div>
       </div>
     </main>
  );
 }
