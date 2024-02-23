"use client";

import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import { useState, useEffect } from 'react'
import logo from "@/Images/QuackLogo.png"


const Navbar = () => {
  return (
    <nav className = "flex-between w-full mb-10 pt-0.5 bg-slate-500">
      <div className='flex.row'>
      <Link href= "/" className ="fd-row flex-center "></Link>
      <Image src={logo} alt ="Quack Logo" width={105} height={100} className='mb-2 ml-4 pb-0.5'></Image>
      <button className='pb-none pt-none'>about</button>
      </div>
    </nav>
  )
  }

export default Navbar