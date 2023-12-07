import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbars/Navbar";
import openn from "../../../assets_/Godown Ions images/gray-left.png";
import sales from "../../../assets_/Godown Ions images/sales.svg";
import Purchase from "../../../assets_/Godown Ions images/purchase.svg";
import closed from "../../../assets_/Godown Ions images/CaretRight1.svg";


type NavItem = {
  id: string;
  icon: string;
  name: string;
  link: string;
  dropdown?: {
    id: string;
    name: string;
    link: string;
  }[];
  hasDropdown?: boolean;
};

const navItems: NavItem[] = [
  {
    id: "Godown",
    name: "Godown Vouchers",
    link: "/GodownDashboard",
    icon: sales,

  },

  {
    id: "Selfs",
    name: "Shelfs ",
    link: "/Selfs",
    icon: sales
  },
 
  {
    id: "Purchase",
    name: "Purchase",
    link: "/purchase",
    icon: Purchase,
  },
  {
    id: "Transfer",
    name: "Transfer",
    link: "/transfer",
    icon: Purchase,
  },
];
const asideButtonCSS = `flex text-[#2A333E] items-center text-[16px] font-bold gap-[8px] cursor-pointer`;

type Props = {
  children: React.ReactNode;
};

const Aside = (props: Props) => {
  const [selectedNavItem, setSelectedNavItem] = useState<string | null>('Godown');
  const [showSidebar, setShowSidebar] = useState(false);

  const getTitle = () => {
    const selectedItem = navItems.find((item) => item.id === selectedNavItem);
    return selectedItem ? selectedItem.name : "";
  };

  return (
    <>
      <div className="flex flex-col">
        <Navbar title={getTitle()} />
        <div className="">
          {showSidebar ? (
            <button
              className="flex text-center justify-center p-[5px] text-4xl text-primary-blue items-center h-[50px] w-[50px] cursor-pointer fixed left-[22px] top-[13%] z-50 translate-x-[-20px] transition-all ease-in-out duration-500"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <img src={openn} alt="" className="h-[24px] w-[24px] p-[5px] shadow-lg border rounded-full border-border-primary" />
            </button>
          ) : (
            <img
              src={closed}
              alt=""
              onClick={() => setShowSidebar(!showSidebar)}
              className="fixed h-[24px] w-[24px] p-[5px] border rounded-full border-border-primary shadow-lg  z-30 flex items-center cursor-pointer left-[258px] top-[14%]"
            />
          )}

          <aside
            className={`flex flex-col fixed justify-between gap-[20px] mt-[32px] shadow-right-lg bg-white top-[62px] border-r w-[270px] h-[80%] ${showSidebar ? "translate-x-[-243px]" : "translate-x-0"
              } transition-all ease-in-out duration-500`}
          >
            <div className="flex flex-col gap-3 pr-[15px]">
              {navItems.map((item) => (
                <div key={item.id}>
                  <Link
                    to={item.link}
                    className={`py-3 px-[20px] h-11  flex items-center ${selectedNavItem === item.id ? "bg-[#F0F7FE] border-l-4 border-black" : ""}`}
                    onClick={() => {
                      setSelectedNavItem(selectedNavItem === item.id ? null : item.id);
                    }}
                  >
                    <div className={`${asideButtonCSS}`}>
                      <img src={item.icon} alt="" />
                      <p className="whitespace-nowrap text-[16px] font-bold">{item.name}</p>
                      {item.hasDropdown && <span className="ml-2">&#9662;</span>}
                    </div>
                  </Link>
                  {item.dropdown && selectedNavItem === item.id && (
                    <div >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.link}
                          className={`py-2 px-[20px] h-11  flex items-center ${subItem.id ? "bg-[#F0F7FE] border-l-4 border-black" : ""}`}
                        >
                          <div className={`${asideButtonCSS} pl-8`}>
                            <p className="whitespace-nowrap text-[16px] font-bold">{subItem.name}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          <div className={`transition-all mt-[7rem] duration-300 ${showSidebar ? "ml-[50px]" : "ml-[300px]"}`}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;
