import { coinsProps, listProps } from "../App"
import { PhTrashBold } from "../assets/icons/Trash"

interface cartProps {
  list: listProps[]
  removeItem(itemCart: listProps): void;
  coins: coinsProps | undefined
}




export function Cart({ list, removeItem, coins }: cartProps) {

  let priceFinal = 0

  function sumPrice(price: number) {

    priceFinal = priceFinal + price
  }

  let BTC = coins?.BTC
  let ETH = coins?.ETH


  return (
    <div className="bg-background   text-text-color p-8 border-2 border-subtitle-color rounded justify-center items-center flex flex-col gap-10">

      {list.length === 0 && <>
        <h1 className="text-subtitle-color text-[20px]"> Seu Carinho de compras está vazio</h1>
      </>}

      {list.map((item) => {
        return (
          <>
            <div key={Math.random()} className="flex gap-5 md:gap-10 whitespace-nowrap py-4 border-b-2 border-color-logo  ">
              <button className="w-[50px] h-[50px]">
                <img className="w-[50px] h-[50px] object-cover rounded-full" src={item.image} alt="" />
              </button>
              <h1 className="m-auto text-[18px]">{item.name}</h1>
              <h1 className="text-color-logo m-auto text-[18px]"> {item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h1>
              <PhTrashBold className="m-auto w-[25px] h-[25px] hover:text-color-logo cursor-pointer" onClick={() => removeItem(item)} />
            </div>

            {sumPrice(item.price)}
          </>)
      })}
      {list.length > 0 && <>
        <div className=" w-full flex justify-around  text-subtitle-color text-[18px]">
          <p>Preço</p>
          <p> {BTC == undefined || null ? <> {priceFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</> : <select className="bg-background focus:border-color-logo focus:border-2 focus:outline-none rounded ">
            <option value="BRL"> {priceFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</option>
            <option value="BTC"> {(priceFinal / BTC).toLocaleString('pt-br', { style: 'currency', currency: 'BTC' }).replace(',', '.')}</option>
            {ETH == undefined || null ? <></> : <option value="ETH"> {(priceFinal / ETH).toLocaleString('pt-br', { style: 'currency', currency: 'ETH' }).replace(',', '.')}</option>}
          </select>}
          </p>
        </div>
        <div className="w-[80%]">
          <button className='w-full h-14 bg-color-logo m-auto rounded'>
            <h1 className="text-[20px] font-bold ">Finalizar Compra </h1>
          </button>
        </div>
      </>}
    </div>
  )
}