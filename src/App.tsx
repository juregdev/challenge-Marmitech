import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Popover } from '@headlessui/react'
import background from './assets/background.png'
import { Astronauts } from './components/Astronauts'
import { Header } from './components/Header'
import { Panel } from './components/Panel'
import { Statistics } from './components/Statistics'
import { WeekPopular } from './components/WeekPopular'
import './styles/style.css'
import { PhShoppingCartBold } from './assets/icons/Shopping-item'
import { PhShoppingCartFill } from './assets/icons/Shopping'
import { Cart } from './components/Cart'
import axios from 'axios'
import { PhCoinsBold } from './assets/icons/Coins'
import { IcBaselineCurrencyBitcoin } from './assets/icons/bitcoin'
import { MajesticonsEtheriumCircle } from './assets/icons/Etherium'
import { Artists } from './components/Artists'
import { Footer } from './components/Footer'

export interface coinsProps {
  BTC: number,
  ETH: number,
}

export interface listProps {
  name: string,
  image: string,
  author: string,
  price: number,
  id: number
}



function App() {
  const [list, setList] = useState<listProps[]>([])

  const [coins, setCoins] = useState<coinsProps | undefined>()


  async function apiRequest() {
    let btc = 0
    let eth = 0
    try {
      btc = await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/').then(res => res.data.ticker.last)
      eth = await axios.get('https://www.mercadobitcoin.net/api/ETH/ticker/').then(res => res.data.ticker.last)



      setCoins({
        BTC: btc,
        ETH: eth
      })
    } catch (err) { throw new Error() }
  }
  useEffect(() => {
    apiRequest()
  }, []
  )



  function setItems(item: listProps) {

    const itemsUnique = [...new Set([...list, item])]

    setList([...itemsUnique])
  }

  function removeItem(ItemCart: listProps) {
    const newList = list.filter(item => item.id !== ItemCart.id)

    setList(newList)
  }



  return (

    <>
      <div style={{
        background: `no-repeat center/cover  url(${background})`
      }}>
        <Header />
        <Panel />
        <Astronauts />
      </div>
      <div>
        <Statistics />
        <WeekPopular setList={setItems} coins={coins} />
      </div>
      <Artists />
      <Footer />
      <div className="fixed right-10 bottom-10">
        <Popover>
          <Popover.Button className="rounded-full border-2 border-text-color hover:border-color-logo p-4 text-text-color hover:text-color-logo bg-background focus:border-color-logo focus:text-color-logo focus:outline-none  ">
            {list.length > 0 ? <PhShoppingCartFill className='w-10 h-10 ' /> : <PhShoppingCartBold className='w-10 h-10 ' />}
          </Popover.Button>
          <Popover.Panel className='fixed md:right-10 w-[94%] md:w-auto right-4 bottom-36'>
            <Cart list={list} removeItem={removeItem} coins={coins} />
          </Popover.Panel>
        </Popover>
      </div>
      {coins?.BTC == undefined || null ? <></> : <>
        <div className="fixed left-10 bottom-10">
          <Popover>
            <Popover.Button className="rounded-full border-2 border-text-color hover:border-color-logo p-4 text-text-color hover:text-color-logo bg-background focus:border-color-logo focus:text-color-logo focus:outline-none ">
              <PhCoinsBold className="w-10 h-10  " />
            </Popover.Button>
            <Popover.Panel className='fixed left-10 bottom-36 w-auto'>
              <div className="text-color-logo text-[16px] bg-background border-2 border-subtitle-color p-4 rounded-2xl w-full" >
                <h1 className="flex justify-between  items-center m-auto "><IcBaselineCurrencyBitcoin className="w-5 h-5 mr-4" /> {(coins.BTC / 1).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h1>
                <h1 className="flex justify-between items-center m-auto "><MajesticonsEtheriumCircle className="w-5 h-5 mr-4" />{(coins.ETH / 1).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h1>
              </div>
            </Popover.Panel>
          </Popover>
        </div>
      </>}
    </>
  )

}
export default App


