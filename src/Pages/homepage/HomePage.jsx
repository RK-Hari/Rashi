import React from 'react'


import HeroSection from './Components/Hero'
import ResortSection from './Components/ResortSection'
import JustSection from './Components/JustSection'
import UpcomingResorts from './Components/UpcomingResorts'
import PictureComponent from './Components/PictureComponent'
import HomeContact from './Components/HomeContact'
import FollowComponent from './Components/FollowComponent'
import Footer from './Components/Footer'
import Counter from './Components/Counter'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <Counter/>
      <ResortSection/>
      <JustSection/>
      <UpcomingResorts/>
      <PictureComponent/>
      <HomeContact/>
      <FollowComponent/>
      <Footer/>
    </div>
  )
}

export default HomePage
