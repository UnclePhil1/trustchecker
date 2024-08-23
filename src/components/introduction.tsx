import React from 'react';
import '../App.css'

const Introduction: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-2 gap-4 -4 w-full h-full bg-dark mt-10 p-6 relative">
            <div className="absolute top-2/3 left-1/2 w-1/2 h-1/2 lg:w-[600px] lg:h-[600px] bg-[#5DEA79] rounded-full -translate-x-1/2 -translate-y-1/2 blur-[50px] shadow-[0_0_100px_#5DEA79] -z[1]">
            </div>

            <h1 className='text-3xl md:text-5xl text-center font-semibold text-white lg:w-2/3 z-50'>A Community-Oriented Crypto Projects Credibility Platform</h1>
            <p className='text-secondary text-center z-50'>Empowers community members to make informed decisions about crypto projects.</p>
            <button className="hidden md:flex justify-center py-2 px-6 rounded-md transition bg-greendark hover:bg-greenish text-white z-50">
                Connect wallet
            </button>
            <img src='/images/screen.png' alt='hero' className='w-full md:w-1/2 z-50' />
        </div>
    )
}

export default Introduction;