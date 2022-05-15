import logo from '../assets/logo.svg'
import logoWallet from '../assets/logo_MetaMask.svg'




export function Header() {
  return (
    <header id="header" className="w-full  text-text-color h-12 py-[57px]">
      <nav className="flex flex-col md:flex-row gap-8 item-center justify-between md:px-40">
        <div id="logo" className='flex'>
          <img src={logo} alt="Logo rocketNFT" className=" w-auto m-auto" />
        </div>
        <div id="options" className="flex gap-16  text-lg leading-5">
          <a href="#" className="flex m-auto hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors">Comprar NFT</a>
          <a href="#" className="flex m-auto hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors">Sobre</a>
          <a href="#" className="flex m-auto hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors">FAQ</a>
        </div>
        <div id="button" className="flex relative gap-20 ">


          <button className="bg-white py-[14px] px-5 text-black-text flex gap-4 focus:outline-none m-auto focus:ring-2 focus:ring-color-logo focus:ring-offset-background rounded hover:ring-2 hover:ring-color-logo hover:ring-offset-background hover:ring-offset-2
          focus:ring-offset-2">
            <img src={logoWallet} alt="logo MetaMask" className="m-auto w-10 h-10" />
            <h1 className="m-auto text-base leading-5 font-bold">Conectar Carteira</h1>
          </button>

        </div>

      </nav>
    </header>
  )
}