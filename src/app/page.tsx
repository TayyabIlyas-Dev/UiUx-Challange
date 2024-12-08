import HeroOne from './components/HeroOne'
import HeroTwo from './components/HeroTwo';
import HeroThree from './components/HeroThree';
import HeroFour from './components/HeroFour';
import HeroFive from './components/HeroFive';
import Herosix from './components/Herosix';


export default function Home() {
  return (
    <div>
           <div>
            <HeroOne/>
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
  );
}
