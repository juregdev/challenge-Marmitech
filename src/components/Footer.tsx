
import logo from '../assets/logo.svg'
import arrow from '../assets/arrow-black.svg'

import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'
import twitter from '../assets/twitter.svg'
import mail from '../assets/email.svg'




export function Footer() {
  return (<footer className='bg-card-color mt-36 h-auto'>
    <div className="w-full h-auto md:h-52 flex items-center justify-center flex-col sm:flex-row py-4 md:py-auto gap-y-6 sm:gap-[45%]">
      <img src={logo} alt="Logo RocketNFT" />
      <a href='#header' className="w-20 h-20 flex justify-center items-center bg-color-logo  focus:outline-none focus:ring-2 focus:ring-color-logo focus:ring-offset-card-color focus:ring-offset-2" onClick={() => { }}>
        <img src={arrow} alt="Arrow Top" />
      </a>
    </div>
    <div className="h-auto px-4 md:h-80 border-y-2 flex border-subtitle-color flex-col md:flex-row">
      <div className="h-full w-full md:w-1/3 px-4 md:py-auto border-b-2 md:border-b-0 md:border-r-2 items-center flex flex-col border-subtitle-color justify-center gap-10 py-4">
        <h1 className="text-[16px  sm:text-xl text-center xl:text-left xl:text-[30px] w-full 2xl:w-7/12  font-bold text-text-color mb-4 md:mb-0">Fique por dentro de <span className="text-color-logo m-auto">todas as novidades</span></h1>
        <div className="w-full flex justify-center">
          <input type="text" className='xl:w-1/2 w-10/12 bg-color-input h-auto xl:h-16 text-color-input  text-center text-[11px] xl:text-[16px] flex justify-center items-center  focus:outline-none focus:ring-2 focus:ring-color-logo focus:ring-offset-card-color focus:ring-offset-2'
            placeholder='NFT@rocketseat.com.br'
          />
          <button className="bg-text-color h-20 md:h-16 xl:w-1/5 w-1/4 text-[11px] xl:text-[20px] font-bold  focus:outline-none focus:ring-2 focus:ring-color-logo focus:ring-offset-card-color focus:ring-offset-2">Enviar</button>
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row justify-around md:px-16 items-center text-center md:text-justify gap-y-5 md:gap-y-0 mt-4 md:mt-auto pb-5 md:pb-auto'>
        <ul className='text-[20px] text-subtitle-color' >
          <li className='text-text-color font-bold'><h1></h1>Empresa</li>
          <li><a href="#" className='hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors'>Sobre</a></li>
          <li><a href="#" className='hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors'>Serviços</a></li>
          <li><a href="#" className='hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors'>Time</a></li>
          <li><a href="#" className='hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors'>Carreira</a></li>
        </ul>
        <ul className='text-[20px] text-subtitle-color list-none' >
          <li className='text-text-color font-bold'><h1></h1>Mapa</li>
          <li><a href="#" className='hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors'>Galeria</a></li>
          <li><a href="#" className='hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors'>Populares</a></li>
          <li><a href="#" className='hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors'>Vendas</a></li>
          <li><a href="#" className='hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors'>Contatos</a></li>
        </ul>
        <ul className='text-[20px] text-subtitle-color list-none' >
          <li className='text-text-color font-bold'><h1></h1>Links</li>
          <li><a href="#" className='hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors'>FAQs</a></li>
          <li><a href="#" className='hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors'>Termos</a></li>
          <li><a href="#" className='hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors'>Política</a></li>
          <li><a href="#" className='hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors'>Ajuda</a></li>
        </ul>

      </div>
      <div>

      </div>
    </div>
    <div className='md:h-24 h-auto w-full flex md:flex-row flex-col gap-y-4 md:gap-y-0 justify-between py-4 md:py-auto md:px-[7%] items-center'>

      <a href="https://www.rocketseat.com.br/" className="text-[20px] text-subtitle-color hover:text-color-logo transition-colors focus:outline-none focus:text-color-logo">Rocketseat.com.br</a>

      <div className='flex gap-14'>
        <a href="#">
          <img src={instagram} className="w-8 h-8" alt="Instragam" />
        </a>
        <a href="#">
          <img src={youtube} className="w-8 h-8" alt="Youtube" />
        </a>
        <a href="#">
          <img src={twitter} className="w-8 h-8" alt="Twitter" />
        </a>
        <a href="#">
          <img src={mail} className="w-8 h-8" alt="Email" />
        </a>
      </div>

    </div>
  </footer>)
}