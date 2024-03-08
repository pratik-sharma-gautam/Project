import React from 'react'
import Link from 'next/link'
function HomeCard({title,href}) {
    return (
        <>

            <div className='w-full h-full flex mt-12'>
                <div className='h-24 w-[45vw] rounded-xl bg-white m-auto flex px-16 justify-between items-center'>
                    <h1 className='text-black text-2xl'>{title}</h1>
                    <Link href={ href}>
                        <button className='bg-black p-4 rounded-lg font-bold'>Read</button></Link>
                </div>
            </div></>
    )
}

export default HomeCard