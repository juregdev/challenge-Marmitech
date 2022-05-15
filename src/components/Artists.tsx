import { v4 as uuidv4 } from 'uuid';

import artist01 from '../assets/artista-1.png'
import artist02 from '../assets/artista-2.png'
import artist03 from '../assets/artista-3.png'
import artist04 from '../assets/artista-4.png'
import artist05 from '../assets/artista-5.png'
import artist06 from '../assets/artista-6.png'

const artistas = [
  {
    name: 'Mayk Brito',
    image: artist01,
    Description: '80 Fotografias',
    alt: "Foto Mayk Brito"
  },
  {
    name: 'Jakeliny G.',
    image: artist02,
    Description: '99 Fotografias',
    alt: "Foto Jakeliny G."
  },
  {
    name: 'João I. (Biro)',
    image: artist03,
    Description: '50 Fotografias',
    alt: "Foto Biro"
  },
  {
    name: 'Tamires Santos',
    image: artist04,
    Description: '43 Fotografias',
    alt: "Foto Tamires"
  },
  {
    name: 'Ana Silva',
    image: artist05,
    Description: '28 Fotografias',
    alt: "Foto Ana"
  },
  {
    name: 'Diego F.',
    image: artist06,
    Description: '20 Fotografias',
    alt: "Foto Diego"
  }
]

export function Artists() {
  return (
    <div className="mt-40">
      <h1 className=" text-[20px] xl:text-[50px] text-center font-bold leading-[60px] mb-32 text-text-color">Melhores <span className="text-color-logo">Artistas</span></h1>

      <div className="flex flex-row justify-center flex-wrap md:px-[15%] gap-4 md:gap-24  pb-6">
        {artistas.map(artista => {
          return (

            <button key={uuidv4()} className="sm:w-[360px] w-[90%] h-[150px] flex justify-center items-center gap-8 bg-card-color text-[10px] sm:text-[14px] md:text-[20px] hover:bg-color-logo group transition-colors focus:outline-none focus:ring-2 focus:ring-color-logo focus:ring-offset-background focus:ring-offset-4 px-2 md:px-auto">
              <img className="md:h-[100px] md:w-[100px] w-[70px] h-[70px]" src={artista.image} alt={artista.alt} />
              <div>
                <h1 className="text-text-color">{artista.name}.</h1>
                <h1 className="text-color-logo group-hover:text-text-color transition-colors">{artista.Description}</h1>
              </div>
            </button>)
        }
        )}
      </div>
    </div>)
}

