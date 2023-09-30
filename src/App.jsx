import React from 'react'

function App() {

  return (
    <>
      <div className= ' bg-purple-500 w-6/12 h-36 text-white border-4 border-yellow-400 rounded-lg'><p className='p-5 bg-gray-600 text-xs text-center mx-3 tracking-tight leading-loose'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat totam eius unde quidem officia, <span className='font-bold text-red-900 underline capitalize cursor-pointer select-none'>vel illum laborum sapiente</span>, qui maiores ratione quasi dolores. Soluta, delectus quod ab beatae aut dolor!</p>
      <button className="bg-green-400 m-3 p-3 border-2 border-red-500 rounded-sm cursor-move shadow-lg">Submit</button>
      </div>
      <div className="h-screen flex flex-wrap">
            <div className="flex w-1/3 h-1/3">
                <div className="bg-teal-100 m-2 w-full flex justify-center items-center">A</div>
            </div>
            <div className="flex w-1/3 h-1/3">
                <div className="bg-teal-300 m-2 w-full flex justify-center items-center">B</div>
            </div>
            <div className="flex w-1/3 h-1/3">
                <div className="bg-teal-500 m-2 w-full flex justify-center items-center">C</div>
            </div>
            <div className='flex flex-col justify-center items-center m-8'>
              <label htmlFor='fullName' className='text-gray-700 text-sm font-bold select-none'>Full Name</label>
              <input id='fullName' className='mt-2 px-3 py-2 placeholder-indigo-400 w-5/6 border rounded-lg' placeholder='Enter your full name' ></input>
              <button className='bg-blue-800 m-4 px-3 py-2 rounded-lg text-blue-100'>Send</button>

            </div>
            </div>
    </>
  )
}

export default App
