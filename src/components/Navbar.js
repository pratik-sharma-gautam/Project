import React from 'react'

function Navbar() {
  return (
    <>
    <div className='bg-black m-4 rounded-3xl p-4'>
        <header className="text-gray-300 body-font">
  <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-blue-700 hover:cursor-pointer">Home</a>
      <a className="mr-5 hover:text-blue-700 hover:cursor-pointer">About</a>
      <a className="mr-5 hover:text-blue-700 hover:cursor-pointer">Contact</a>
      <a className="mr-5 hover:text-blue-700 hover:cursor-pointer">Deep Dive</a>
    </nav>
    <div>
    <button className='bg-white rounded-xl px-8 max-w-18 min-w-4 py-1.5 box-border text-gray-900 hover:text-gray-900 inline-block'>Login</button>




    </div>
  </div>
</header>


    </div>
    {/* Code Started */}
 <div className='bg-gray-600'>
        
 </div>
   </>
  )
}

export default Navbar