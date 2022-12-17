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
        <img src="./Line16.png" className='line1' alt="Los Angeles"/>
        <img src="./Line16.png" className='line'alt="Los Angeles"/>
        <SecondSec/>
        <img src="./Line16.png" className='line2' alt="Los Angeles"/>
        <img src="./Line16.png" className='line' alt="Los Angeles"/>
        <ThirdSec/>
        <img src="./Line16.png" className='line' alt="Los Angeles"/>
        <img src="./Line16.png" className='line2' alt="Los Angeles"/>
        <FourthSec/>
        <img src="./Line16.png" className='line' alt="Los Angeles"/>
        <FifthSec/>
        <img src="./Line16.png" className='line3' alt="Los Angeles"/>
        <img src="./Line16.png" className='line4' alt="Los Angeles"/>
        <SixthSec/>
        <img src="./Line16.png" className='line5' alt="Los Angeles"/>
        <img src="./Line16.png" className='line' alt="Los Angeles"/>
        <SeventhSec/>
        </div>
  )
}

export default Homepage