import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <Header />
        <SpecialityMenu />
        <TopDoctors />
        <Banner />
    </div>
  )
}

export default Home

// Time paused: 12:15:00

/*
frontend: npm run dev
backend: npm run server
admin: npm run dev

Run all three before coding.
*/