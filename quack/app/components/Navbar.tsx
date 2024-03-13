"use client";

import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import { useState, useEffect } from 'react'
import logo from "@/Images/QuackLogo.png"
import patomenu from "@/Images/patomenu.png"
import x from "@/Images/x.png"


const Navbar = () => {

  const[isOpen, setIsOpen] = useState(false);

  const menuPato = () =>{
    setIsOpen(!isOpen);
  };


  return (
    <>
    <nav className = "bg-white sticky top-0 z-[20] mx-auto flex w-full itens-center justify-between border border-b-black border-opacity-20 p-4">
      <div className='flex-row'>
      <Link href= "/" className ="fd-row flex-center "></Link>
      <Image src={logo} alt ="Quack Logo" width={105} height={100} className='mb-2 ml-4 pb-0.5'></Image>
      </div>
      <div className=' hidden md:flex justify-between  pr-3 itens-center pt-4 w-1/4 gap-3'>
        <Link className="text-lg hover:text-gray-600 shrink" href="/">Shop</Link>
        <Link className="text-lg  hover:text-gray-600 shrink" href="/about">About</Link>
        <Link className='pr-4 text-lg  hover:text-gray-600 shrink' href="/carrinho"> Carrinho</Link>
      </div>
      <div className='md:hidden'>
        <button onClick={menuPato}>
          {isOpen?  <Image className='size-7' src={x} alt='x'/>: <Image className='size-16' src={patomenu} alt='Menu Pato'/> }
        </button>
      </div>
    </nav>
    {isOpen &&(
      <div className='flex basis-full flex-col items-center'>
        <Link className="text-lg hover:text-gray-600 shrink" href="/">Home</Link>
        <Link className="text-lg  hover:text-gray-600 shrink" href="/about">About</Link>
        <Link className=' text-lg  hover:text-gray-600 shrink' href="/carrinho"> Carrinho</Link>
      </div>

    )}



    </>
  )
  }

export default Navbar