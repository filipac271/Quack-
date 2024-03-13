import React from 'react'

const Footer = () => {
  return (
    <footer className=' max-w-7xl mx-auto  justify-between flex-col min-h-screen mt-auto flex  insert-x-0 bottom-0'>
			<div className=' bg-amber-100 flex flex-row mt-auto'>
      <div className='flex-1 flex flex-end justify-between mt-auto'>
      <div className=' '>
        <ul className='p-5'>
          <p className='text-gray-800 font-bold text-3xl pb-6'>Sobre Nós </p>
          <p className='text-gray-600 font-semibold hover:text-gray-900'>A tua empresa patástica e quack quack quack</p>
        </ul>
      </div>
      <div className="">
					<ul className='p-5'>
						<p className="text-gray-800 font-bold text-2xl pb-4">Coleções</p>
						<li className="text-gray-600 text-md pb-2 font-semibold hover:text-gray-900 cursor-pointer">
							Nova coleçao
						</li>
						<li className="text-gray-600 text-md pb-2 font-semibold  hover:text-gray-900 cursor-pointer">
            Nova coleçao
						</li>
						<li className="text-gray-600 text-md pb-2 font-semibold hover:text-gray-900 cursor-pointer">
            Nova coleçao
						</li>
						<li className="text-gray-600 text-md pb-2 font-semibold  hover:text-gray-900 cursor-pointer">
            Nova coleçao
						</li>
					</ul>
				</div>
        <div className="">
					<ul className='p-5'>
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
					<ul className='p-5'>
						<p className="text-gray-800 font-bold text-2xl pb-4">cena</p>
						<li className="text-gray-600 text-md pb-2 font-semibold hover:text-gray-900 cursor-pointer">
							quack quack quack
						</li>
						<li className="text-gray-600 text-md pb-2 font-semibold  hover:text-gray-900 cursor-pointer">
            quack quack quack
						</li>
					</ul>
				</div>
				</div>
        </div>
        <div className="flex flex-row justify-center items-center text-center w-full p-5 bg-gray-50 align-content:flex-end;">
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