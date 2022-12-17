import React from 'react'
import Careousel from './Careousel'
import FifthSec from './fifthSec'
import FirstSection from './firstSection'
import FourthSec from './fourthSec'
import SecondSec from './secondSec'
import SeventhSec from './seventhSec'
import SixthSec from './sixthSec'
import ThirdSec from './thirdSection'
function Homepage() {
  return (
    <div className='homepage'>
        <Careousel/>
        <FirstSection/>
        <img src="./Line16.png" className='line1'/>
        <img src="./Line16.png" className='line'/>
        <SecondSec/>
        <img src="./Line16.png" className='line2'/>
        <img src="./Line16.png" className='line'/>
        <ThirdSec/>
        <img src="./Line16.png" className='line'/>
        <img src="./Line16.png" className='line2'/>
        <FourthSec/>
        <img src="./Line16.png" className='line'/>
        <FifthSec/>
        <img src="./Line16.png" className='line3'/>
        <img src="./Line16.png" className='line4'/>
        <SixthSec/>
        <img src="./Line16.png" className='line5'/>
        <img src="./Line16.png" className='line'/>
        <SeventhSec/>
        </div>
  )
}

export default Homepage