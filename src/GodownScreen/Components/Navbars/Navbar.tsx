import logo from "../../../assets_/Godown Ions images/Lohawalla.svg"
export const Navbar = ({ title }:any) => {
  return (
    <div className="flex fixed bg-[#21A0C3] h-[90px] md:justify-start justify-between  w-full">
        <div className="flex justify-center items-center p-[20px] md:px-[61px] md:py-[31px]">
            <img src={logo} alt="" className="w-[150px] h-[150px]"/>
        </div>

        <div className="flex items-center pr-[20px]">
          <h1 className="text-white md:text-[24px]   md:px-20">{title}</h1>
        </div>
        
    </div>
  )
}
