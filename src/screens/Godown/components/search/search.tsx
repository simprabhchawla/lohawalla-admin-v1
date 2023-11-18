// import SearchBlack from "@src/assets/icons/SearchBlack.svg"
import Close from "@src/assets/icons/Close.svg"
// import FilterBlack from "@src/assets/icons/FilterBlack.svg"
import { useEffect, useState } from "react"

const Search = ({ suggestions, handleSuggestionClick, searchInput, setSearchInput }: any) => {


    return (
        <>
            <div className="relative">
                <input
                    style={{ boxShadow: "1px 2px 11px 0px #00000040" }}
                    className="h-[72px] w-full ps-14 pe-[72px] bg-[#FAFCFE] text-[16px] leading-6 font-normal text-[#0A0A0A] rounded-lg"
                    placeholder="Search customers"

                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="search" />
                <div className="flex items-center absolute top-0 bottom-0 left-[24px]">
                    {/* <img src={SearchBlack} className="w-[24px] h-[24px]" alt="" /> */}
                </div>
                <div className="flex items-center absolute top-0 bottom-0 right-[24px]">
                    {/* <img src={FilterBlack} className="w-[16px] h-[16px]" alt="" /> */}
                </div>
            </div>
            {suggestions.length > 0 && (
                <ul className="flex flex-col py-[20px] absolute left-[19rem] top-[23rem] bg-[#FAFCFE] shadow-lg w-[213px]  px-[20px] rounded-lg">
                    {suggestions.map((suggestion: any, index: any) => (
                        <li key={index} onClick={() => handleSuggestionClick(suggestion)} className="hover:bg-[#e8e8e8] cursor-pointer">
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Search