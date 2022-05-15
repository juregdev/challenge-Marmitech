import banner from '../assets/banner2.png'

export function Statistics() {
  return (
    <div className="w-full text-text-color flex flex-col md:flex-row justify-center items-center font-bold md:border-b-2 md:border-subtitle-color ">
      <div className="h-[660px] md:px-16 text-center flex flex-col justify-center items-center gap-[70px] md:border-r-2 md:border-subtitle-color">
        <div>
          <h1 className="text-[50px]">10k+</h1>
          <p className="text-subtitle-color text-xl">Artes</p>
        </div>
        <div>
          <h1 className="text-[50px]">200+</h1>
          <p className="text-subtitle-color text-xl">Vendas</p>
        </div>
        <div>
          <h1 className="text-[50px]">10+</h1>
          <p className="text-subtitle-color text-xl">Artistas</p>
        </div>
      </div>
      <div className="w-full h-[660px]  flex flex-1 flex-col  font-normal items-start justify-between">
        <div className="flex flex-col md:flex-row w-full h-1/2 text-lg justify-center md:px-4 xl:px-20 pt-16 items-center md:gap-32">
          <div className="xl:w-[430px] w-1/2  flex flex-col gap-16 justify-center items-center">
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id potenti diam et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
            <a className="text-left w-full leading-5 underline underline-offset-4 hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors" href="#">lorem ipsum</a>
          </div>
          <div className="xl:w-[430px] w-1/2 flex flex-col gap-16 justify-center items-center ">
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id potenti diam et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
            <a className="text-left w-full leading-5 underline underline-offset-4 hover:text-color-logo focus:outline-none focus:text-color-logo transition-colors" href="#">lorem ipsum</a>
          </div>

        </div>
        <div className="w-full  h-1/2 mt-[70px]">
          <img className="w-full h-[300px] object-cover" src={banner} alt="" />
        </div>
      </div>
    </div >
  )
}