import React from 'react'

function CountryCard() {
    return (
        <div className="bg-red-300 shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer grid grid-col w-full max-w-[250px] mx-auto">
            <img 
                src="https://flagcdn.com/is.svg" 
                alt="flag"
                className='w-full h-40 object-cover'
            />
            <div className='p-5 hover:bg-blue-300 flex-1 '>
                <h3 className='text-xl mt-3 mb-2 font-bold '>India</h3>      
                <p className='py-1'><span className='font-semibold'>Population:</span>1400L</p>
                <p className='py-1'><span className='font-semibold'>Region:</span> Asia</p>
                <p className='py-1'><span className='font-semibold'>Capital:</span> New Delhi</p>
            </div>
        </div>
    )
}

export default CountryCard
