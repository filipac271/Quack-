import Image from "next/image";
import { carrinhoL} from "@/app/components/ListaProdutos";

const Carrinho = () => {
  return (
    <main>
      <div className="flex justify-center ml-10 mt-10 font-serif text-6xl">Carrinho</div>
      <div className="bg-yellow-100 ml-20 mt-20 mr-20 rounded-xl border-4 border-yellow-300">
        <div className = "grid grid-cols-2 gap-4 ">
          <h1 className = "underline mt-10 flex justify-center font-mono text-4xl ">Produto</h1>
          <h1 className = "mr-10 underline mt-10 flex justify-center font-mono text-4xl">Preço</h1>
        </div>
          <div>
          {carrinhoL.map((produto) => (
             <div key={produto.nome} className="bg-white hover:bg-gray-100 hover:shadow-2xl rounded border-2 ml-10 mt-10 mb-10 mr-10 hover:underline hover:font-semibold grid grid-cols-2 gap-4">
               <div className="grid grid-cols-2 gap-4">
                <Image className="size-48" src={produto.imagem} alt={produto.nome} />
                <h1 className="text-center flex items-center font-mono text-3xl">{produto.nome}</h1>
               </div>
               <h1 className="flex items-center justify-center font-mono text-3xl">{produto.preco}</h1>
             </div>
           ))}
        </div>  
        </div>
        <div className="bg-yellow-100 grid grid-cols-2 gap-4 ml-56 mr-56 mt-10 mb-10 rounded-xl border-4 border-yellow-300">
          <div className="ml-10">
            <h1 className="mt-10 text-mono underline font-medium text-3xl">Método de envio:</h1>
            <div className="cursor-pointer hover:bg-yellow-200 hover:bg-opacity-50 mt-10 border-2 border-yellow-100 hover:font-medium hover:rounded-lg hover:border-2 hover:border-yellow-600 text-mono text-2xl"> Método de envio padrão : Free</div>
            <div className="cursor-pointer hover:bg-yellow-200 hover:bg-opacity-50 mb-10 border-2 border-yellow-100 hover:font-medium hover:rounded-lg hover:border-2 hover:border-yellow-600 text-mono text-2xl">Envio Expresso : 3,90€</div>
          </div>
          <div>
           <h1 className="mt-10 text-mono underline font-medium text-3xl">Pagamento:</h1>
           <div className = "mt-10 text-mono text-2xl grid grid-cols-2 gap-4 mr-10">
            <div>
               <div>SubTotal:</div>
               <div>Custo Envio:</div>
             </div>
             <div>
                <div className = "flex justify-end">90€</div>
                <div className = "flex justify-end">0€</div>
              </div>
           </div>
           <div className = "border-t-2 border-black text-mono text-2xl grid grid-cols-2 gap-4 mr-10">
            <div>
               <div className = "font-medium">Total:</div>
             </div>
             <div>
                <div className = "font-medium flex justify-end">90€</div>
              </div>
           </div>
           <div className="cursor-pointer hover:shadow-2xl hover:shadow-gray-600 mt-10 mb-10 mr-10 rounded-xl bg-yellow-600 font-semibold text-2xl font-mono text-white flex justify-center ">Checkout</div>
          </div>
        </div>
    </main>
  )
}

export default Carrinho