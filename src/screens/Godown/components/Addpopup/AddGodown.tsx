import { useForm } from "react-hook-form";
import check from "../../../../assets_/icons/save.svg";
import search from "../../../../assets/icons/Search.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AddGodown = ({ closed, onSubmitCallback }: any) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [checked, setChecked] = React.useState(false);

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
  };

  const onSubmit = (data: any) => {
    data.cloudGodown = checked;
    onSubmitCallback(data);
    reset();
  };
  const handleChange = (e: any) => {
    setChecked(e.target.checked);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="fixed inset-0 flex items-center p-[50px] z-50 justify-center bg-black bg-opacity-50">
        <div className="modal-bg absolute inset-0 "></div>
        <div className="relative w-[656px] bg-white p-[40px] rounded-lg shadow-lg">
          <div className="scrollable-content max-h-[550px]">
            <div className="flex flex-col gap-[44px]">
              <div className="flex py-[16px] px-[20px] gap-[24px] flex-col  rounded-[24px]">
                <div className="flex gap-[5px] items-center">
                  <strong className="text-2xl font-semibold ps-1 capitalize">
                    Add details
                  </strong>
                </div>

                <div className="border rounded-[8px] px-[16px] text-[14p] py-[8px] flex flex-col">
                  <input
                    {...register("godownName", {
                      required: "Godown name is required",
                    })}
                    style={{ outline: "none", boxShadow: "none" }}
                    type="text"
                    placeholder="Godown name"
                    className="text-[16px] border-none focus:outline-none w-full  outline:none"
                  />
                </div>

                <div className="border rounded-[8px] px-[16px] py-[8px] flex flex-col">
                  <input
                    {...register("godownCode", {
                      required: "code is required",
                    })}
                    style={{ outline: "none", boxShadow: "none" }}
                    type="text"
                    placeholder="Godown Code"
                    className="w-full border-none focus:outline-none  outline:none"
                  />
                </div>

                <div className="border items-start gap-[10px] rounded-[8px] px-[16px] py-[8px] flex flex-col">
                  <select
                    {...register("address", { required: "city is required" })}
                    onChange={handleStateChange}
                    value={selectedState}
                    style={{ outline: "none", boxShadow: "none" }}
                    className="w-full border-none outline-none"
                  >
                    <option value="" className="">Select a Address</option>
                    {states.map((state: any) => (
                      <option key={state.id} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="border rounded-[8px] px-[16px] py-[15px] flex flex-col">
                  <div className="flex gap-8 items-center">
                    <h1 className="text-sm ps-3 text-gray-500">Virtual Godown</h1>
                    <input
                      value="test"
                      type="checkbox"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center px-[32px] py-[12px] bg-[#005D7F]  rounded-[8px] gap-[8px]"
                >
                  <span className="text-white bold text-xl">Save</span>
                  {/* <img src={check} alt="" className="w-[20px] h-[20px]" /> */}
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

export default AddGodown;
