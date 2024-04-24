import React from 'react'

import {FaFacebookF, FaInstagram, FaTwitterSquare} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";





const Footer = () => {
  return (
    <footer className=' max-w-7xl justify-between flex-col max-h-screen mt-auto '>
			<div className=' bg-amber-100 flex flex-row'>
      <div className='flex-1 flex flex-end justify-between '>
      <div className=' '>
        <ul className='p-4'>
          <p className='text-gray-800 font-bold text-2xl pb-4'>Sobre Nós </p>
          <p className='text-gray-600 text-base font-semibold hover:text-gray-900'>A tua empresa patástica e quack quack quack</p>
        </ul>
      </div>
      <div className="">
					<ul className='p-4'>
						<p className="text-gray-800 font-bold text-2xl pb-4">Coleções</p>
						<li className="text-gray-600 text-md pb-2 font-semibold hover:text-gray-900 cursor-pointer">
							Nova coleçao
						</li>
						<li className="text-gray-600 text-md pb-2 font-semibold  hover:text-gray-900 cursor-pointer">
            Nova coleçao
						</li>
						
					</ul>
				</div>
        <div className="">
					<ul className='p-4'>
						<p className="text-gray-800 font-bold text-2xl pb-4">Contactos</p>
						<li className="text-gray-600 text-md pb-2 font-semibold hover:text-gray-900 cursor-pointer">
							Email : quack@quack.pt
						</li>
						<li className="text-gray-600 text-md pb-2 font-semibold  hover:text-gray-900 cursor-pointer">
            +351 123456789
						</li>
					</ul>
				</div>
				<div className="">
					<ul className='p-4'>
						<p className="text-gray-800 font-bold text-2xl pb-4">Redes Sociais</p>
						<ul className='flex flex-wrap gap-x-4'>
							<FaInstagram className='text-xl cursor-pointer hover:text-yellow-400'/>
							<FaFacebookF className='text-xl cursor-pointer hover:text-yellow-400'/>
							<FaLinkedin className='text-xl cursor-pointer hover:text-yellow-400'/>
							<FaTwitterSquare className='text-xl cursor-pointer hover:text-yellow-400'/>


						</ul>
					</ul>
				</div>
				</div>
        </div>

        <div className="flex flex-row justify-center items-center text-center w-full p-3 bg-gray-50 align-content:flex-end">
				<h1 className=" text-gray-800 font-semibold">
					© 2023-2024 All rights reserved | Build with ❤ by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						  Quack{" "}
					</span>
				</h1>
			</div>
     
    </footer>
  )
}

export default Footer
