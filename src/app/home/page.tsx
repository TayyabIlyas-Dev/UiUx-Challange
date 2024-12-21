import React from 'react'
import HeroTwo from '../components/HeroTwo'
import HeroThree from '../components/HeroThree'
import HeroFour from '../components/HeroFour'
import Herosix from '../components/Herosix'
import HeroFive from '../components/HeroFive'
import HomeSecOne from '../components/HomeSecOne'

const page = () => {
  return (
    <div>
           <div>
            <HomeSecOne/>
        </div>
           <div>
            <HeroTwo/>
        </div>
           <div>
            <HeroThree/>
        </div>
           <div>
            <HeroFour/>
        </div>
           <div>
            <HeroFive/>
        </div>
           <div>
            <Herosix/>
        </div>
    </div>
  )
}

export default page