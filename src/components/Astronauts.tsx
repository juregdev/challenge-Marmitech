import { v4 as uuidv4 } from 'uuid';
import astronaut1 from '../assets/galeria-1.png'
import astronaut2 from '../assets/galeria-2.png'
import astronaut3 from '../assets/galeria-3.png'
import astronaut4 from '../assets/galeria-4.png'
import astronaut5 from '../assets/galeria-5.png'
import astronaut6 from '../assets/galeria-6.png'
import astronaut7 from '../assets/galeria-7.png'
import astronaut8 from '../assets/galeria-8.png'

const astroGalery = [
  {
    image: astronaut1,
    alt: "Astronalta 1"
  },
  {
    image: astronaut2,
    alt: "Astronalta 2"
  },
  {
    image: astronaut3,
    alt: "Astronalta 3"
  }, {
    image: astronaut4,
    alt: "Astronalta 4"
  }, {
    image: astronaut5,
    alt: "Astronalta 5"
  }, {
    image: astronaut6,
    alt: "Astronalta 6"
  }, {
    image: astronaut7,
    alt: "Astronalta 7"
  }, {
    image: astronaut8,
    alt: "Astronalta 8"
  },
]

export function Astronauts() {
  return (
    <>
      <div id="galery" className="mt-24 flex w-full flex-wrap justify-center gap-x-4 gap-y-14 items-center md:px-[15%] ">
        {astroGalery.map(item => {
          return (
            <img key={uuidv4()} className=" w-[80%] sm:w-1/2 md:w-[308px] h-[198px] border-2 border-text-color" src={item.image} alt={item.alt} />
          )
        })}
      </div>
    </>)
}