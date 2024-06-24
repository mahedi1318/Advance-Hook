import React, { useRef } from 'react'

const FirstRef = () => {

    let ref = useRef(0)
  

    let handleClick = ()=>{
        ref.current = ref.current + 1  
        console.log(ref.current)
    }

 
    

  return (
    <>
    <div className='w-full h-[500px] bg-[#444] flex justify-center items-center'>
        <div className=''>
            <button onClick={handleClick} className='py-3 px-7 bg-yellow-900 text-white text-xl font-medium rounded-xl'>Click me</button>         
        </div>
    </div>      
    </>
  )
}

export default FirstRef
