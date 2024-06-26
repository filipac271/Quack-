"use client";

import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import { useState, useEffect } from 'react'
import logo from "@/Images/QuackLogo.png"
import dp from "@/Images/Dionisiopato.jpeg"
import afp from "@/Images/Afonsopato.jpeg"
import ap from "@/Images/Andreiapato.jpeg"
import fp from "@/Images/FIlipapato.jpeg"
import fundopatos from "../../public/patosfundoabout.jpeg"
import patosemfundo from "@/Images/QuackLogo-removebg-preview.png"



const About = () => {
  return (
    <div className='flex flex-col'>
      <div className='min-h-screen relative' >
    <div className=''>
      <Image src={fundopatos} alt="background image" className='w-full h-full object-cover' layout="fill" />
    </div>
    <div className='bg-stone-100 shadow-[0px_5px_48px_rgba(0,0,0,0.20)] w-3/12 h-6/6 ml-14 mt-10 pl-2  inseert-0 z-10 relative'>
      <Image src={patosemfundo} alt="Quack Logo" width={105} height={100} className='mb-2 ml-2 pt-2 pb-0.5'></Image>
      <p className='text-3xl font-bold'>A tua empresa patastica!</p>
      <p className='mt-3'>Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack Quack</p>
      <button className='bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded mt-4 flex-auto'>Contact us!</button>
    </div>
    </div>

    

    

      <div className="bg-yellow-100 flex flex-center justify-self-end bottom-0 justify-around place-content-baseline items-center pt-10 pb-5">
        <div className='md:flex justify-between itens-center gap-20'>

          <div className='justify-center'>
          <Image src={dp} alt ="Dionisio pato" className="size-36 object-cover"></Image>
          <div>Dionisio Santos</div>
          <div>CEO</div>
          </div>

          <div>
          <Image src={ap} alt ="Andreia pato" className="size-36 object-cover"></Image>
          <div>Andreia Cardoso</div>
          <div>COO</div>
          </div>

          <div>
          <Image src={afp} alt ="Afonso pato" className="size-36 object-cover"></Image>
          <div>Afonso Carpinteiro</div>
          <div>CTO</div>
          </div>

          <div>
          <Image src={fp} alt ="Filipa pato" className="size-36 object-cover"></Image>
          <div>Filipa Gonçalves</div>
          <div>CFO</div>
          </div>

        </div>

      </div>

    </div>
    
  )
}

export default About