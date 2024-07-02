import axios from "axios";
import React, { useState, useEffect } from "react";

import check from "../../../../assets_/icons/save.svg";
// import search from "../../../../assets/icons/Search.svg"

const EditPopUp = ({
  handleFormSubmit,
  closed,
  selectedRow,
  setCloudGodown,
  setSelectedRow,
}: any) => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          `https://api.countrystatecity.in/v1/countries/IN/states`,
          {
            headers: {
              "X-CSCAPI-KEY":
                "ZTV0b3VBTDRoRk9USjM2dXBwUDQ4VXZnQVhsTEtCWUFpa0NDeGZ1bw==",
            },
          }
        );
        setStates(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStates();
  }, []);

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
    setSelectedRow({ ...selectedRow, address: event.target.value });
  };
  const handleChange = (e: any) => {

    setCloudGodown(e.target.checked); 
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="fixed inset-0 flex items-center p-[50px] z-50 justify-center bg-black bg-opacity-50">
        <div className="modal-bg absolute inset-0"></div>
        <div className="relative w-[656px] bg-white p-[40px] rounded-lg shadow-lg">
          <div className="scrollable-content">
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col">
                  <h1 className="text-[32px] bold ps-5">Edit Details</h1>
              </div>

              <div className="flex py-[8px] px-[20px] gap-[24px] flex-col rounded-[24px]">
               <div className="border  rounded-[8px] px-[16px] py-[8px] flex flex-row items-center">
                  <label className="text-md font-semibold">Name :</label>
                  <input
                    className="border-none focus:outline-none outline-none"
                    type="text"
                    value={selectedRow.godownName}
                    style={{ outline: "none", boxShadow: "none" }}
                    onChange={(e) =>
                      setSelectedRow({
                        ...selectedRow,
                        godownName: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="border rounded-[8px] px-[16px] py-[8px] flex flex-row items-center">
                <label className="text-md font-semibold">Code :</label>
                  <input
                    className="border-none focus:outline-none outline-none"
                    type="text"
                    value={selectedRow.godownCode}
                    style={{ outline: "none", boxShadow: "none" }}
                    onChange={(e) =>
                      setSelectedRow({
                        ...selectedRow,
                        godownCode: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="border items-start gap-[10px] rounded-[8px] px-[16px] py-[8px] flex flex-col">
                  <select
                    onChange={handleStateChange}
                    value={selectedState}
                    style={{ outline: "none", boxShadow: "none" }}
                    className="w-full border-none outline-none"
                  >
                    <option className="text-md font-semibold" value="">Select a Address</option>
                    {states.map((state: any) => (
                      <option key={state.id} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="border rounded-[8px] px-[16px] py-[15px] flex flex-col">
                  <div className="flex gap-8 items-center">
                    <label className="text-md font-semibold">Virtual Godown </label>
                    <input
                      type="checkbox"
                      name="cloudGodown"
                      value={selectedRow.cloudGodown}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button
                    type="submit"
                    className="flex items-center justify-center px-[32px] py-[12px] bg-[#005D7F]  rounded-[8px] gap-[8px]"
                  >
                    <span className="text-white  bold text-xl">Save</span>
                  </button>
              </div>
            </div>
            {closed()}
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditPopUp;
