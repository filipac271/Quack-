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

const tendencias = [
 { nome: "Pato Clássico Amarelo", preco: "5000€", imagem: PatoAmarelo },
 { nome: "Pato Clássico Laranja", preco: "5000€", imagem: PatoLaranja },
 { nome: "Pato Clássico Laranja", preco: "5000€", imagem: PatoLaranja },
 { nome: "Pato Clássico Laranja", preco: "5000€", imagem: PatoLaranja },
];

const classicos = [
  { nome: "Pato Clássico Amarelo", preco: "10€", imagem: PatoAmarelo },
  { nome: "Pato Clássico Azul", preco: "10€", imagem: PatoAzul },
  { nome: "Pato Clássico Vermelho", preco: "10€", imagem: PatoVermelho },
  { nome: "Pato Clássico Rosa", preco: "10€", imagem: PatoRosa },
  { nome: "Pato Clássico AzulClaro", preco: "10€", imagem: PatoAzulClaro },
  { nome: "Pato Clássico Laranja", preco: "10€", imagem: PatoLaranja },
  { nome: "Pato Clássico Preto", preco: "10€", imagem: PatoPreto },
  { nome: "Pato Clássico Verde", preco: "10€", imagem: PatoVerde },
  { nome: "Pato Coroa Amarelo", preco: "10€", imagem: PatoCoroaAmarelo},
  { nome: "Pato Coroa Azul", preco: "10€", imagem: PatoCoroaAzul },
  { nome: "Pato Coroa Rosa", preco: "10€", imagem: PatoCoroaRosa },
  { nome: "Pato Coroa Vermelho", preco: "10€", imagem: PatoCoroaVermelho },
 ];

 const animais = [
  { nome: "Pato Abelha", preco: "15€", imagem: PatoAbelha },
  { nome: "Pato Burro", preco: "15€", imagem: PatoBurro },
  { nome: "Pato Camelo", preco: "15€", imagem: PatoCamelo },
  { nome: "Pato Canguru", preco: "15€", imagem: PatoCanguru },
  { nome: "Pato Caracol", preco: "15€", imagem: PatoCaracol },
  { nome: "Pato Cavalo", preco: "15€", imagem: PatoCavalo },
  { nome: "Pato Elefante", preco: "15€", imagem: PatoElefante },
  { nome: "Pato Flamingo", preco: "15€", imagem: PatoFlamingo },
  { nome: "Pato Joaninha", preco: "15€", imagem: PatoJoaninha },
  { nome: "Pato Leao", preco: "15€", imagem: PatoLeao },
  { nome: "Pato Macaco", preco: "15€", imagem: PatoMacaco },
  { nome: "Pato Morcego", preco: "15€", imagem: PatoMorcego },
  { nome: "Pato Ovelha", preco: "15€", imagem: PatoOvelha },
  { nome: "Pato Pavao", preco: "15€", imagem: PatoPavao },
  { nome: "Pato Pinguim", preco: "15€", imagem: PatoPinguim },
  { nome: "Pato Porco", preco: "15€", imagem: PatoPorco },
  { nome: "Pato Tartaruga", preco: "15€", imagem: PatoTartaruga },
  { nome: "Pato Touro", preco: "15€", imagem: PatoTouro },
  { nome: "Pato Tubarao", preco: "15€", imagem: PatoTubarao },
  { nome: "Pato Vaca", preco: "15€", imagem: PatoVaca },
 ]

 const profissoes = [
  { nome: "Pato Agricultor", preco: "15€", imagem: PatoAgricultor },
  { nome: "Pato Agricultora", preco: "15€", imagem: PatoAgricultora },
  { nome: "Pato Barmen", preco: "15€", imagem: PatoBarmen },
  { nome: "Pato Cabeleireiro", preco: "15€", imagem: PatoCabeleireiro },
  { nome: "Pato Capitao", preco: "15€", imagem: PatoCapitao },
  { nome: "Pato Chefe", preco: "15€", imagem: PatoChefe },
  { nome: "Pato Cirurgiao", preco: "15€", imagem: PatoCirurgiao },
  { nome: "Pato Enfermeira", preco: "15€", imagem: PatoEnfermeira },
  { nome: "Pato Engenheiro", preco: "15€", imagem: PatoEngenheiro },
  { nome: "Pato Fotografo", preco: "15€", imagem: PatoFotografo },
  { nome: "Pato Marinheiro", preco: "15€", imagem: PatoMarinheiro },
  { nome: "Pato Medica", preco: "15€", imagem: PatoMedica },
  { nome: "Pato Pintor", preco: "15€", imagem: PatoPintor },
  { nome: "Pato Policia", preco: "15€", imagem: PatoPolicia },
  { nome: "Pato Homem de Negócios", preco: "15€", imagem: PatoHomemNegocios },
 // { nome: "Pato Programador", preco: "15€", imagem: PatoProgramador },
  { nome: "Pato Socorrista", preco: "15€", imagem: PatoSocorrista },
 ]

 const herois = [
  { nome: "Pato Batman", preco: "15€", imagem: PatoBatman },
  { nome: "Pato Batman Cinza", preco: "15€", imagem: PatoBatmanCinza },
  { nome: "Pato Homem Ferro", preco: "15€", imagem: PatoHomemFerro },
  { nome: "Pato Hulk", preco: "15€", imagem: PatoHulk },
  { nome: "Pato SpiderMan", preco: "15€", imagem: PatoSpiderMan },
  { nome: "Pato SuperHomem", preco: "15€", imagem: PatoSuperHomem },
 ]

export default function Home() {
  return (
     <main>
       <div className="bg-gradient-to-r from-yellow-400 to-yellow-100 flex flex-row gap-x-60">
         <Image className="ml-20 transform size-90" src={patoLGBT} alt="imagem"></Image>
         <h1 className="text-black text-opacity-100 text-5xl mt-52 font-serif font-thin underline decoration-black decoration-1 underline-offset-8">Resolvemos todos os teus code-problems Quack</h1>
       </div>
       <div>
         <h1 className="mt-20 text-left ml-10 text-5xl font-serif font-thin margin"> Tendências desta semana: </h1>
         <div className="mt-10 mb-10 grid grid-cols-4 gap-4 justify-center">
           {tendencias.map((produto) => (
             <div key={produto.nome} className="hover:underline hover:font-semibold">
               <Image className="hover:shadow-2xl ml-16" src={produto.imagem} alt={produto.nome} />
               <h1 className="text-center font-mono text-xl">{produto.nome}</h1>
               <h1 className="text-center font-mono text-xl">{produto.preco}</h1>
             </div>
           ))}
         </div>
       </div>
       <div>
         <h1 className="mt-20 text-left ml-10 text-5xl font-serif font-thin margin"> Patos Clássicos: </h1>
         <div className="mt-10 mb-10 grid grid-cols-4 gap-4 justify-center">
           {classicos.map((produto) => (
             <div key={produto.nome} className="hover:underline hover:font-semibold">
               <Image className="hover:shadow-2xl ml-16" src={produto.imagem} alt={produto.nome} />
               <h1 className="text-center font-mono text-xl">{produto.nome}</h1>
               <h1 className="text-center font-mono text-xl">{produto.preco}</h1>
             </div>
           ))}
         </div>
       </div>
       <div>
         <h1 className="mt-20 text-left ml-10 text-5xl font-serif font-thin margin"> Animais: </h1>
         <div className="mt-10 mb-10 grid grid-cols-4 gap-4 justify-center">
           {animais.map((produto) => (
             <div key={produto.nome} className="hover:underline hover:font-semibold">
               <Image className="hover:shadow-2xl ml-16" src={produto.imagem} alt={produto.nome} />
               <h1 className="text-center font-mono text-xl">{produto.nome}</h1>
               <h1 className="text-center font-mono text-xl">{produto.preco}</h1>
             </div>
           ))}
         </div>
       </div>
       <div>
         <h1 className="mt-20 text-left ml-10 text-5xl font-serif font-thin margin"> Profissões </h1>
         <div className="mt-10 mb-10 grid grid-cols-4 gap-4 justify-center">
           {profissoes.map((produto) => (
             <div key={produto.nome} className="hover:underline hover:font-semibold">
               <Image className="hover:shadow-2xl ml-16" src={produto.imagem} alt={produto.nome} />
               <h1 className="text-center font-mono text-xl">{produto.nome}</h1>
               <h1 className="text-center font-mono text-xl">{produto.preco}</h1>
             </div>
           ))}
         </div>
       </div>
       <div>
         <h1 className="mt-20 text-left ml-10 text-5xl font-serif font-thin margin"> Super-Patos </h1>
         <div className="mt-10 mb-10 grid grid-cols-4 gap-4 justify-center">
           {herois.map((produto) => (
             <div key={produto.nome} className="hover:underline hover:font-semibold">
               <Image className="hover:shadow-2xl ml-16" src={produto.imagem} alt={produto.nome} />
               <h1 className="text-center font-mono text-xl">{produto.nome}</h1>
               <h1 className="text-center font-mono text-xl">{produto.preco}</h1>
             </div>
           ))}
         </div>
       </div>
     </main>
  );
 }
