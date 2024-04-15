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
import PatoBatmanCinza from "@/Images/PatoBatmanCinza.png"
import PatoBurro from "@/Images/PatoBurro.png"
import PatoCabeleireiro from "@/Images/PatoCabeleireiro.png"
import PatoCamelo from "@/Images/PatoCamelo.png"
import PatoCanguru from "@/Images/PatoCanguru.png"
import PatoCapitao from "@/Images/PatoCapitao.png"
import PatoCaracol from "@/Images/PatoCaracol.png"
import PatoCavalo from "@/Images/PatoCavalo.png"
import PatoChefe from "@/Images/PatoChefe.png"
import PatoCirurgia from "@/Images/PatoCirurgia.png"
import PatoCirurgiao from "@/Images/PatoCirurgiao.png"
import PatoCoroaAmarelo from "@/Images/PatoCoroaAmarelo.png"
import PatoCoroaAzul from "@/Images/PatoCoroaAzul.png"
import PatoCoroaRosa from "@/Images/PatoCoroaRosa.png"
import PatoCoroaVermelho from "@/Images/PatoCoroaVermelho.png"
import PatoElefante from "@/Images/PatoElefante.png"
import PatoEnfermeira from "@/Images/PatoEnfermeira.png"
import PatoEngenheiro from "@/Images/PatoEngenheiro.png"
import PatoFlamingo from "@/Images/PatoFlamingo.png"
import PatoFotografo from "@/Images/PatoFotografo.png"
import PatoHomemFerro from "@/Images/PatoHomemFerro.png"
import PatoHomemNegocios from "@/Images/PatoHomemNegocios.png"
import PatoHulk from "@/Images/PatoHulk.png"
import PatoJoaninha from "@/Images/PatoJoaninha.png"
import PatoLaranja from "@/Images/PatoLaranja.png"
import PatoLeao from "@/Images/PatoLeao.png"
import PatoMacaco from "@/Images/PatoMacaco.png"
import PatoMarinheiro from "@/Images/PatoMarinheiro.png"
import PatoMedica from "@/Images/PatoMedica.png"
import PatoMedico from "@/Images/PatoMedico.png"
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
import PatoSuperMulher from "@/Images/PatoSuperMulher.png"
import PatoTartaruga from "@/Images/PatoTartaruga.png"
import PatoTouro from "@/Images/PatoTouro.png"
import PatoTubarao from "@/Images/PatoTubarao.png"
import PatoVaca from "@/Images/PatoVaca.png"
import PatoVerde from "@/Images/PatoVerde.png"
import PatoVermelho from "@/Images/PatoVermelho.png"
import patotestes from "@/Images/imgPato.png";
import patoPrincipal from "@/Images/patomenu.png"

export default function Home() {
  return (
    <main >
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-200 flex flex-row gap-x-60">
        <Image className="transform scale-x-[-1] size-100" src={patoPrincipal} alt="imagem"></Image>
        <h1 className="text-black text-opacity-100 text-5xl mt-52 font-serif font-thin underline decoration-black decoration-1 underline-offset-8">Resolvemos todos os teus code-problems Quack</h1>
        {/* <Link href="/about">About</Link>
        <Link href="/carrinho">Carrinho</Link> */}
      </div>
      <div>
        <h1 className= "mt-20 text-left ml-10 text-5xl font-serif font-thin margin"> Tendências desta semana </h1>
        <div className="mt-10 mb-10 flex flex-row flex-nowrap gap-x-32 justify-center" >
          <Image src={PatoAbelha} alt="imagem" /> 
          <Image src={PatoHomemFerro} alt="imagem" /> 
          <Image src={PatoAzul} alt="imagem" /> 
          <Image src={PatoMedico} alt="imagem" /> 
        </div>
      </div>
      <div>
        <h1 className= "mt-20 ml-10 text-5xl font-serif font-thin margin">As nossas coleções de patos:</h1>
        <h1 className="mt-20 ml-10 text-3xl underline font-serif ">Patos clássicos:</h1>

        <div className="mt-10 mb-10 flex flex-row flex-nowrap gap-x-32 justify-center" >
          <div className="hover:shadow-2xl">
            <Image src={PatoAmarelo} alt="imagem"/>
            <h1 className="text-center">Pato Clássico Amarelo</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoLaranja} alt="imagem"/>
            <h1 className="text-center">Pato Clássico Laranja</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoRosa} alt="imagem"/>
            <h1 className="text-center">Pato Clássico Rosa</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoVermelho} alt="imagem"/>
            <h1 className="text-center">Pato Clássico Vermelho</h1>
            <h1 className="text-center">2499.99€</h1>
          </div> 
        </div>

        <div className="mt-20 mb-10 flex flex-row flex-nowrap gap-x-32 justify-center">
        <div className="hover:shadow-2xl">
            <Image src={PatoPreto} alt="imagem"/>
            <h1 className="text-center">Pato Clássico Preto</h1>
            <h1 className="text-center">2499.99€</h1>
          </div> 
          <div className="hover:shadow-2xl">
            <Image src={PatoAzul} alt="imagem"/>
            <h1 className="text-center">Pato Clássico Azul</h1>
            <h1 className="text-center">2499.99€</h1>
          </div> 
          <div className="hover:shadow-2xl">
            <Image src={PatoAzulClaro} alt="imagem"/>
            <h1 className="text-center">Pato Clássico Azul Claro</h1>
            <h1 className="text-center">2499.99€</h1>
          </div> 
          <div className="hover:shadow-2xl">
            <Image src={PatoVerde} alt="imagem"/>
            <h1 className="text-center">Pato Clássico Verde</h1>
            <h1 className="text-center">2499.99€</h1>
          </div> 
        </div>

        <div className="mt-20 mb-10 flex flex-row flex-nowrap gap-x-32 justify-center" >
          <div className="hover:shadow-2xl">
            <Image src={PatoCoroaAmarelo} alt="imagem"/>
            <h1 className="text-center">Pato Coroa Amarelo</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoCoroaRosa} alt="imagem"/>
            <h1 className="text-center">Pato Coroa Rosa</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoCoroaAzul} alt="imagem"/>
            <h1 className="text-center">Pato Coroa Azul</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoCoroaVermelho} alt="imagem"/>
            <h1 className="text-center">Pato Coroa Vermelho</h1>
            <h1 className="text-center">2499.99€</h1>
          </div> 
        </div>

        <h1 className="mt-20 ml-10 text-3xl underline font-serif ">Animais:</h1>

        <div className="mt-20 mb-10 flex flex-row flex-nowrap gap-x-32 justify-center" >
          <div className="hover:shadow-2xl">
            <Image src={PatoAbelha} alt="imagem"/>
            <h1 className="text-center">Pato Abelha</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoBurro} alt="imagem"/>
            <h1 className="text-center">Pato Burro</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoCamelo} alt="imagem"/>
            <h1 className="text-center">Pato Camelo</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoCanguru} alt="imagem"/>
            <h1 className="text-center">Pato Canguru</h1>
            <h1 className="text-center">2499.99€</h1>
          </div> 
        </div>

        <div className="mt-20 mb-10 flex flex-row flex-nowrap gap-x-32 justify-center " >
          <div className="hover:shadow-2xl">
            <Image src={PatoCaracol} alt="imagem"/>
            <h1 className="text-center">Pato Caracol</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoCavalo} alt="imagem"/>
            <h1 className="text-center">Pato Cavalo</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoTubarao} alt="imagem"/>
            <h1 className="text-center">Pato Tubarão</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoElefante} alt="imagem"/>
            <h1 className="text-center">Pato Elefante</h1>
            <h1 className="text-center">2499.99€</h1>
          </div> 
        </div>

        <div className="mt-20 mb-10 flex flex-row flex-nowrap gap-x-32 justify-center" >
          <div className="hover:shadow-2xl">
            <Image src={PatoFlamingo} alt="imagem"/>
            <h1 className="text-center">Pato Flamingo</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoVaca} alt="imagem"/>
            <h1 className="text-center">Pato Vaca</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoTouro} alt="imagem"/>
            <h1 className="text-center">Pato Touro</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoJoaninha} alt="imagem"/>
            <h1 className="text-center">Pato Joaninha</h1>
            <h1 className="text-center">2499.99€</h1>
          </div> 
        </div>

        <div className="mt-20 mb-10 flex flex-row flex-nowrap gap-x-32 justify-center" >
          <div className="hover:shadow-2xl">
            <Image src={PatoLeao} alt="imagem"/>
            <h1 className="text-center">Pato Leão</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoMacaco} alt="imagem"/>
            <h1 className="text-center">Pato Macaco</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoMorcego} alt="imagem"/>
            <h1 className="text-center">Pato Morcego</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoOvelha} alt="imagem"/>
            <h1 className="text-center">Pato Ovelha</h1>
            <h1 className="text-center">2499.99€</h1>
          </div> 
        </div>

        <div className="mt-20 mb-10 flex flex-row flex-nowrap gap-x-32 justify-center" >
          <div className="hover:shadow-2xl">
            <Image src={PatoPavao} alt="imagem"/>
            <h1 className="text-center">Pato Pavão</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoPinguim} alt="imagem"/>
            <h1 className="text-center">Pato Pinguim</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoPorco} alt="imagem"/>
            <h1 className="text-center">Pato Porco</h1>
            <h1 className="text-center">2499.99€</h1>
          </div>
          <div className="hover:shadow-2xl">
            <Image src={PatoTartaruga} alt="imagem"/>
            <h1 className="text-center">Pato Tartaruga</h1>
            <h1 className="text-center">2499.99€</h1>
          </div> 
        </div>
        
      </div>
    </main>
  );
}

