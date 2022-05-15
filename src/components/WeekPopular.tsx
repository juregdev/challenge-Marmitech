import { Listbox } from "@headlessui/react"
import { coinsProps, listProps } from "../App"
import Astronauts1 from "../assets/astronauta-1.png"
import Astronauts2 from "../assets/astronauta-2.png"
import Astronauts3 from "../assets/astronauta-3.png"
import Astronauts4 from "../assets/astronauta-4.png"
import { PhArrowDownRightBold } from "../assets/icons/Arrow-Top"

//import { PhArrowDownRightBold } from '../assets/icons/Arrow-Top'




const astronauts = [
  {
    name: 'Astronauta 1',
    image: Astronauts1,
    author: 'Mayk Brito',
    price: 250000.00,
    id: Math.random()
  },
  {
    name: 'Astronauta 2',
    image: Astronauts2,
    author: 'Jakeliny Gracielly',
    price: 400000.00,
    id: Math.random()
  },
  {
    name: 'Astronauta 3',
    image: Astronauts3,
    author: 'João Inácio (Biro)',
    price: 149000.00,
    id: Math.random()
  },
  {
    name: 'Astronauta 4',
    image: Astronauts4,
    author: 'Tamires Santos',
    price: 99000.00,
    id: Math.random()
  }
]

interface WeekPopularProps {
  setList: (prop: listProps) => void,
  coins: coinsProps | undefined
}

export function WeekPopular({ setList, coins }: WeekPopularProps) {

  let BTC = coins?.BTC
  let ETH = coins?.ETH

  return (
    <div className="mt-40 md:px-20 px-4">
      <div className="mb-40"> <h1 className="text-[25px] sm:text-[35px] md:text-[50px] font-bold text-text-color leading-[60px]"><span className="text-color-logo">Populares</span> da semana</h1></div>
      <div className="flex  justify-center w-full">
        <div className=" flex flex-col md:flex-row flex-wrap justify-between gap-y-20 gap-x-6">

          {astronauts.map(astronaut => {
            return (
              <div key={astronaut.id} className="w-full md:w-1/3">
                <div className='flex text-text-color justify-between mb-11' >
                  <h1 className="text-[18px] sm:text-[25px] md:text-[30px] font-medium">{astronaut.name} </h1>
                  <button type='button' className="hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors" onClick={() => { setList(astronaut); }}>
                    <PhArrowDownRightBold className="md:w-[50px] sm:w-[40px] md:h-[50px] sm:h-[40px] w-[30px] h-[30px] rotate-[270deg]" />
                  </button>
                </div>
                <div className=" flex justify-between  leading-6 mb-6">
                  <h1 className="text-subtitle-color font-semibold md:text-[20px] text-[14px]">{astronaut.author}</h1>
                  <h1 className="text-color-logo md:text-[20px] text-[14px] ">
                    {BTC == undefined || null ? <>{astronaut.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</> : <><select className="bg-background focus:border-color-logo focus:border-2 focus:outline-none ">
                      <option value="BRL"> {astronaut.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</option>
                      <option value="BTC"> {(astronaut.price / BTC).toLocaleString('pt-br', { style: 'currency', currency: 'BTC' }).replace(',', '.')}</option>
                      {ETH == undefined || null ? <></> : <option value="ETH"> {(astronaut.price / ETH).toLocaleString('pt-br', { style: 'currency', currency: 'ETH' }).replace(',', '.')}</option>}
                    </select></>}

                  </h1>
                </div>
                <img className="w-full" src={astronaut.image} alt="" />
              </div>
            )
          })}


        </div>
      </div>
    </div >
  )
}