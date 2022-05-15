import artist01 from '../assets/artista-1.png'
import artist02 from '../assets/artista-2.png'
import artist03 from '../assets/artista-3.png'
import artist04 from '../assets/artista-4.png'
import artist05 from '../assets/artista-5.png'
import artist06 from '../assets/artista-6.png'
import badge from '../assets/badge.svg'

export function Panel() {
  return (

    <div className=" w-full mt-[120px] md:mt-[90px] flex gap-10 items-center justify-center flex-col md:flex-row text-text-color py-5 sm:px-4">
      <div id="market" className='w-full md:w-[400px]  flex flex-col gap-[50px]'>
        <p className=" mb:text-[18px] leading-[20px] mb-14 font-normal text-center md:text-left px-5 md:px-auto">
          Mercado digital para colecionáveis em criptos e tokens não fungível (NFT).
          Compre, venda e descubra ativos digitais exclusivos para você.
        </p>
        <div id="artists" className="relative flex justify-between items-center h-16  w-4/5 md:w-auto ml-3 m-auto md:ml-auto">
          <div className="relative w-1/3 m-auto justify-center items-center ">
            <img className="w-20 absolute left-0 -bottom-10 hover:z-10 hover:scale-110" src={artist01} alt="" />
            <img className="w-20 absolute left-4 -bottom-10 hover:z-10 hover:scale-110" src={artist02} alt="" />
            <img className="w-20 absolute left-8  -bottom-10 hover:z-10 hover:scale-110" src={artist03} alt="" />
            <img className="w-20 absolute left-12 -bottom-10 hover:z-10 hover:scale-110" src={artist04} alt="" />
            <img className="w-20 absolute left-16 -bottom-10 hover:z-10 hover:scale-110" src={artist05} alt="" />
            <img className="w-20 absolute left-20 -bottom-10 hover:z-10 hover:scale-110" src={artist06} alt="" />
          </div>
          <p className="font-bold text-lg w-1/2 ml-10  md:w-1/2 md:ml-20 text-center ">+10
            Artistas selecionados</p>
        </div>
      </div>
      <div id="discover" className="w-full md:w-[580px] px-4 md:px-auto">
        <h1 className='text-[30px] text-center my-8 md:my-auto md:text-left   md:px-0 w-full  md:text-[50px] leading-auto md:leading-[60px] font-bold'>
          Descubra a verdadeira
          arte digital e colecione diversas <span className="text-color-logo"> NFTs </span>
        </h1>
      </div>
      <div id="banner">
        <img src={badge} className="md:h-full  w-[70%] m-auto" alt="" />
      </div>
    </div>

  )
}