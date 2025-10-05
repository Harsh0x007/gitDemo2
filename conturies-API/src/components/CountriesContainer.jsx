import React from 'react'
import CountryCard from './CountryCard'

function CountriesContainer() {
    return (
        <>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20">
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 pt-10 pb-20">


            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            </main>
            </div>
        </>
    )
}

export default CountriesContainer
