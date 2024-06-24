import React, { useRef, useState } from 'react'

const TimeWork = () => {

    let [startTime, setStartTime] = useState(null)
    let [nowTime, setNowTime] = useState(null)

    let stopTimeRef = useRef(null)


    const hanleStartTime = () => {
        setStartTime(Date.now())
        setNowTime(Date.now())
        
        stopTimeRef.current = setInterval(() => {
            setNowTime(Date.now())
        }, 100);       
    }

    let showTimeNumber = 0

    if(startTime != null &&  nowTime != null){
        showTimeNumber = (nowTime - startTime) / 1000;
    }

    let hanleStopTime = ()=>{
        clearInterval(stopTimeRef.current)
    }
    

  return (
    <>
      <div className='w-full h-[500px] bg-[#352615] flex justify-center items-center'>
        <div>
            <h2 className='text-3xl text-white font-semibold'>Time work runing for : {showTimeNumber.toFixed(3)}</h2>
            <button onClick={hanleStartTime} className='text-xl text-white font-semibold py-3 px-6 bg-yellow-600 rounded-xl mt-8'>Start</button>
            <button onClick={hanleStopTime} className='text-xl text-white font-semibold py-3 px-6 bg-blue-600 ml-5 rounded-xl mt-8'>Stop</button>
        </div>
      </div>
    </>
  )
}

export default TimeWork
