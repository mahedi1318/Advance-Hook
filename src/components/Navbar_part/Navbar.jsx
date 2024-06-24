import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='w-full pt-[20px] pb-[20px] bg-gray-800'>
        <div className="">
            <ul className='flex gap-12 text-white justify-center'>
                <li><a href="/">Ref-Hook</a></li>
                <li><a href="/effect">Effect-Hook</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
            </ul>
        </div>
    </div>     
    </>
  )
}

export default Navbar
