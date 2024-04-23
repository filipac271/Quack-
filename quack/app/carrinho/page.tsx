import Image from "next/image";
import Link from "next/link";
import PatoAbelha from "@/Images/PatoAbelha.png"
import PatoAgricultor from "@/Images/PatoAgricultor.png"
import PatoAgricultora from "@/Images/PatoAgricultora.png"
import PatoAmarelo from "@/Images/PatoAmarelo.png"
import PatoAzul from "@/Images/PatoAzul.png"
import PatoAzulClaro from "@/Images/PatoAzulClaro.png"
import PatoBarmen from "@/Images/PatoBarmen.png"
import PatoBatman from "@/Images/PatoBatman.png"
import PatoBatmanCinza from "@/Images/PatoBatmanCInza.png"
import PatoBurro from "@/Images/PatoBurro.png"
import PatoCabeleireiro from "@/Images/PatoCabeleireiro.png"
import PatoCamelo from "@/Images/PatoCamelo.png"
import PatoCanguru from "@/Images/PatoCanguru.png"
import PatoCapitao from "@/Images/PatoCapitao.png"
import PatoCaracol from "@/Images/PatoCaracol.png"
import PatoCavalo from "@/Images/PatoCavalo.png"
import PatoChefe from "@/Images/PatoChefe.png"
import PatoCirurgiao from "@/Images/PatoCirurgiao.png"
import PatoCoroaAmarelo from "@/Images/PatoCoroaAmarelo.png"
import PatoCoroaAzul from "@/Images/PatoCoroaAzul.png"
import PatoCoroaRosa from "@/Images/PatoCoroaRosa.png"
import PatoCoroaVermelho from "@/Images/PatoCoroaVermelho.png"
import PatoElefante from "@/Images/PatoElefante.png"
import PatoEnfermeira from "@/Images/PatoEnfermeira.png"
import PatoEngenheiro from "@/Images/PatoEngenheiro.png"
import PatoFlamingo from "@/Images/PatoFlamingo.png"
import PatoFotografo from "@/Images/PatoFotografo.jpeg"
import PatoHomemFerro from "@/Images/PatoHomemFerro.png"
import PatoHomemNegocios from "@/Images/PatoHomemNegocios.png"
import PatoHulk from "@/Images/PatoHulk.png"
import PatoJoaninha from "@/Images/PatoJoaninha.png"
import PatoLaranja from "@/Images/PatoLaranja.png"
import PatoLeao from "@/Images/PatoLeao.png"
import PatoMacaco from "@/Images/PatoMacaco.png"
import PatoMarinheiro from "@/Images/PatoMarinheiro.png"
import PatoMedica from "@/Images/PatoMedica.png"
import PatoMorcego from "@/Images/PatoMorcego.png"
import PatoOvelha from "@/Images/PatoOvelha.png"
import PatoPavao from "@/Images/PatoPavao.png"
import PatoPinguim from "@/Images/PatoPinguim.png"
import PatoPintor from "@/Images/PatoPintor.png"
import PatoPolicia from "@/Images/PatoPolicia.png"
import PatoPorco from "@/Images/PatoPorco.png"
import PatoPreto from "@/Images/PatoPreto.png"
import PatoProgramador from "@/Images/PatoProgramador.png"
import PatoRosa from "@/Images/PatoRosa.png"
import PatoSocorrista from "@/Images/PatoSocorrista.png"
import PatoSpiderMan from "@/Images/PatoSpiderMan.png"
import PatoSuperHomem from "@/Images/PatoSuperHomem.png"
import PatoTartaruga from "@/Images/PatoTartaruga.png"
import PatoTouro from "@/Images/PatoTouro.png"
import PatoTubarao from "@/Images/PatoTubarao.png"
import PatoVaca from "@/Images/PatoVaca.png"
import PatoVerde from "@/Images/PatoVerde.png"
import PatoVermelho from "@/Images/PatoVermelho.png"
import patoLGBT from "@/Images/PatoLGBT.png"

const carrinho = [
  { nome: "Pato Batman", preco: "15€", imagem: PatoBatman },
  { nome: "Pato Batman Cinza", preco: "15€", imagem: PatoBatmanCinza },
  { nome: "Pato Homem de Ferro", preco: "15€", imagem: PatoHomemFerro },
  { nome: "Pato Hulk", preco: "15€", imagem: PatoHulk },
  { nome: "Pato SpiderMan", preco: "15€", imagem: PatoSpiderMan },
  { nome: "Pato SuperHomem", preco: "15€", imagem: PatoSuperHomem },
 ]


const Carrinho = () => {
  return (
    <main>
      <div className = "flex justify-center ml-10 mt-10 font-mono text-5xl">Carrinho</div>
      <div className="bg-yellow-100 ml-20 mt-20 mr-20 rounded-xl border-4 border-yellow-300">
        <div className = "grid grid-cols-2 gap-4 ">
          <h1 className = "underline mt-10 flex justify-center font-mono text-4xl ">Produto</h1>
          <h1 className = "mr-10 underline mt-10 flex justify-center font-mono text-4xl">Preço</h1>
        </div>
          <div>
          {carrinho.map((produto) => (
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
            <h1 className="mt-10 border-2 border-yellow-100 hover:font-medium hover:rounded-lg hover:border-2 hover:border-yellow-600 text-mono text-2xl"> Método de envio padrão : Free</h1>
            <h1 className="mb-10 border-2 border-yellow-100 hover:font-medium hover:rounded-lg hover:border-2 hover:border-yellow-600 text-mono text-2xl">Envio Expresso : 3,90€</h1>
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
           <div className="hover:shadow-2xl hover:shadow-gray-600 mt-10 mb-10 mr-10 rounded-xl bg-yellow-600 font-semibold text-2xl font-mono text-white flex justify-center ">Checkout</div>
          </div>
        </div>
    </main>
  )
}

export default Carrinho