import React from 'react'
import check from "../../../../assets_/Godown Ions images/check.svg"
import close from "../../../../assets_/icons/x-close.svg"



export const AddAisle = ({ isPopupOpen, setIsPopupOpen, openPopup, closePopup }: any) => {
    return (
        <div>

            <div className='flex gap-[10px] justify-end'>

                <button
                    className="text-[#005D7F] flex gap-[5px] items-center border border-[#005D7F] bg-white font-bold py-2 px-4 mt-4 rounded"
                    onClick={closePopup}
                >
                    <img src={close} alt="" />

                    Close
                </button>
                <button
                    type='submit'
                    className="bg-[#005D7F] flex gap-[5px] items-center text-white font-bold py-2 px-4 mt-4 rounded"
                >
                    <img src={check} alt="" />
                    Create Aisles
                </button>
            </div>

        </div>
    )
}
