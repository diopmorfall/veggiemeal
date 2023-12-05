import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()

    return (
        <header className='w-full flex items-center justify-center'>
            <nav className='w-full flex flex-row justify-between items-center py-4 px-3'>
                <h2 
                    onClick={() => navigate('/')}
                    className='italic font-semibold text-lg'
                >
                    veggiemeal.com</h2>
                <img src="" alt="M" srcset="" className=''/>
            </nav>
        </header>
    )
}
