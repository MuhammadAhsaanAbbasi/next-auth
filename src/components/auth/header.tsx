import React from 'react'

interface Header {
    label:string
}

const Header = ({label}:Header) => {
    return (
        <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
            <h1 className='text-3xl font-semibold font-["poppins"]'>Auth</h1>
            <p className='text-xl'>{label}</p>
        </div>
    )
}

export default Header