// AddManagerForm.js
import React from "react";
import { useForm } from "react-hook-form";
import check from "../../../assets_/icons/save.svg";
const AddRatioCreationForm = ({ onClose, onSubmit,UnitData,ItemData }: any) => {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (data: any) => {
    onSubmit(data);
    onClose();
  };


  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-[20px]"
    >
      <div className="text-[24px] text-[#005D7F] font-bold">Add Ratio</div>
      <div className="flex flex-col gap-[15px]">
        <div className="flex gap-[10px]  justify-between">
          <label className="flex gap-[10px] w-[50%] flex-col">
            <span className="text-[#21A0C3]">Item1</span>
            <select {...register("item1", { required: true })}  className="border rounded-[8px] border-[#DFE1E6]">
              <option>Select Item1</option>
              {
                ItemData && ItemData.map((element:any,index:any)=>{
                  return(
                    <option value={element._id}>{element.name}</option>
                  )
                })
              }
            </select>
          </label>

          <label className="flex gap-[10px] w-[50%] flex-col">
            <span className="text-[#21A0C3]">Item2</span>
            <select {...register("item2", { required: true })}  className="border rounded-[8px] border-[#DFE1E6]">
              <option>Select Item2</option>
              {
                ItemData && ItemData.map((element:any,index:any)=>{
                  return(
                    <option value={element._id}>{element.name}</option>
                  )
                })
              }
            </select>
          </label>
        </div>

        <div className="flex gap-[10px]  justify-between">
          <label className="flex gap-[10px] w-[100%] flex-col">
            <span className="text-[#21A0C3]">Item1 Unit</span>
            <select {...register("unit1", { required: true })}  className="border rounded-[8px] border-[#DFE1E6]">
              <option>Select Unit</option>
              {
                UnitData && UnitData.map((element:any,index:any)=>{
                  return(
                    <option value={element.value}>{element.name}</option>
                  )
                })
              }
            </select>
          </label>

          <label className="flex gap-[10px] w-[100%] flex-col">
            <span className="text-[#21A0C3]">Item2 Unit</span>
            <select {...register("unit2", { required: true })}  className="border rounded-[8px] border-[#DFE1E6]">
              <option>Select Unit</option>
              {
                UnitData && UnitData.map((element:any,index:any)=>{
                  return(
                    <option value={element.value}>{element.name}</option>
                  )
                })
              }
            </select>
          </label>
        </div>
        <div className="flex gap-[10px]  justify-between">
          <label className="flex gap-[10px] w-[100%] flex-col">
            <span className="text-[#21A0C3]">Value1</span>
            <input
              type="number"
              {...register("value1", { required: true })}
              className="border rounded-[8px] border-[#DFE1E6]"
            />
          </label>

          <label className="flex gap-[10px] w-[100%] flex-col">
            <span className="text-[#21A0C3]">Value2</span>
            <input
               type="number"
              {...register("value2", { required: true })}
              className="border rounded-[8px] border-[#DFE1E6]"
            />
          </label>
        </div>
      </div>

      <div className="flex gap-[10px] justify-end text-center">
        <button
          onClick={onClose}
          className="text-[#005D7F] border-2 border-[#005D7F] rounded-[8px] py-[12px] px-[30px]  "
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-[#005D7F] items-center gap-[10px] flex  rounded-[8px] py-[12px] px-[30px]  text-white"
        >
          <img src={check} alt="" />
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddRatioCreationForm;
