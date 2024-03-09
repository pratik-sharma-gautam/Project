import React from 'react'
import Navbar from '@/components/Navbar'
function page() {
  return (
    <>
    <Navbar/>

    <div>
        <div className="content text-start pl-16 pt-4 text-black">
            <h1 className="text-3xl font-semibold">
                What You'll Learn?
            </h1> <br />
            <ol>
                <li>What is Sleep?</li>
                <li>How do we fall Asleep?</li>
                <li>Factors Affecting Your Sleep</li>
                <li>Tools for Improving Sleep</li>
            </ol>
        </div>
    </div>
    </>
  )
}

export default page