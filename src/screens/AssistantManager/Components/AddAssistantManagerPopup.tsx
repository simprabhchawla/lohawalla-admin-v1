import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';

type FormValues = {
    name: string;
    employeeCode: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    role: string;
    managerId: string;

};
interface ManagerData {
    _id: string;
    user: {
        name: string;
    };
}

interface Props {
    close: () => void;
    AddManager: any;
    managerData: any
}

export const AssistantManagerPopupForm: React.FC<Props> = ({ close, AddManager, managerData }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
        setError,
    } = useForm<FormValues>();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);




    const onSubmit: SubmitHandler<FormValues> = (data) => {
        AddManager(data)
        console.log(data);
    };

    const watchPassword = watch('password');
    const inputFieldCss = `w-[100%] `

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-[650px] shadow-md flex flex-col gap-5">
                <button
                    type="button"
                    className="absolute top-[13%] right-[29%] m-3 text-black bg-white p-2 rounded-full shadow-lg focus:outline-none"
                    onClick={close}
                >
                    <FaTimes />
                </button>
                <p className="text-[28px] text-[#005D7F]  font-bold ">Assistant Manager </p>


                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                    <div className='flex gap-2 w-[100%]'>
                        <div className={`${inputFieldCss}`}>
                            <label htmlFor="name" className="block text-[#21A0C3] font-medium mb-2">
                                Name
                            </label>
                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: 'Name is required' }}
                                render={({ field }) => (
                                    <input {...field} type="text" id="name" className="form-input w-full border bg-[#FAFBFC] border-[#DFE1E6] rounded-sm"
                                        style={{ outline: "none", boxShadow: "none" }}
                                    />
                                )}
                            />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                        </div>
                        <div className={`${inputFieldCss}`}>
                            <label htmlFor="employeeCode" className="block text-[#21A0C3] font-medium mb-2">
                                Employee Code
                            </label>
                            <Controller
                                name="employeeCode"
                                control={control}
                                rules={{ required: 'Employee Code is required' }}
                                render={({ field }) => (
                                    <input {...field} type="text" id="employeeCode" className="form-input w-full  border bg-[#FAFBFC] border-[#DFE1E6] rounded-sm"
                                        style={{ outline: "none", boxShadow: "none" }}
                                    />
                                )}
                            />
                            {errors.employeeCode && <span className="text-red-500">{errors.employeeCode.message}</span>}
                        </div>

                    </div>

                    <div className='flex gap-2 w-[100%]'>
                        <div className={`${inputFieldCss}`}>
                            <label htmlFor="email" className="block text-[#21A0C3] font-medium mb-2">
                                Email
                            </label>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: 'Email is required',
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Invalid email address',
                                    },
                                }}
                                render={({ field }) => (
                                    <input {...field} type="email" id="email" className="form-input w-full  border bg-[#FAFBFC] border-[#DFE1E6] rounded-sm"
                                        style={{ outline: "none", boxShadow: "none" }}
                                    />
                                )}
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>
                        <div className={`${inputFieldCss}`}>
                            <label htmlFor="contact" className="block text-[#21A0C3] font-medium mb-2">
                                Contact
                            </label>
                            <Controller
                                name="phoneNumber"
                                control={control}
                                rules={{
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message: 'Phone number must be 10 digits',
                                    },
                                }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="tel"
                                        id="phoneNumber"
                                        className="form-input w-full  border bg-[#FAFBFC] border-[#DFE1E6] rounded-sm"
                                        style={{ outline: "none", boxShadow: "none" }}
                                    />
                                )}
                            />
                            {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber.message}</span>}

                        </div>

                    </div>

                    <div className='flex gap-2 w-[100%]'>
                        <div className={`${inputFieldCss}`}>
                            <label htmlFor="password" className="block text-[#21A0C3] font-medium mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{ required: 'Password is required' }}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type={showPassword ? 'text' : 'password'}
                                            id="password"
                                            className="form-input w-full border bg-[#FAFBFC] border-[#DFE1E6] rounded-sm"
                                            style={{ outline: "none", boxShadow: "none" }}
                                        />
                                    )}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>

                        <div className={`${inputFieldCss}`}>
                            <label htmlFor="confirmPassword" className="block text-[#21A0C3] font-medium mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Controller
                                    name="confirmPassword"
                                    control={control}
                                    rules={{
                                        required: 'Confirm Password is required',
                                        validate: (value) =>
                                            value === watchPassword || 'The passwords do not match',
                                    }}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            id="confirmPassword"
                                            className="form-input w-full border bg-[#FAFBFC] border-[#DFE1E6] rounded-sm"
                                            style={{ outline: "none", boxShadow: "none" }}
                                        />
                                    )}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
                        </div>
                    </div>

                    <div className='flex gap-2 w-[100%]'>
                        <div className={`${inputFieldCss}`}>
                            <label htmlFor="role" className="block text-[#21A0C3] font-medium mb-2">
                                Role
                            </label>
                            <Controller
                                name="role"
                                control={control}
                                defaultValue="GODOWN_ASSISTANT"
                                render={({ field }) => (
                                    <select {...field} id="role" className="w-full border bg-[#FAFBFC] border-[#DFE1E6] rounded-sm">
                                        <option value="GODOWN_ASSISTANT">Godown Assistant</option>
                                    </select>
                                )}
                            />
                        </div>

                        <div className={`${inputFieldCss}`}>
                            <label htmlFor="manager" className="block text-[#21A0C3] font-medium mb-2">
                                Manager
                            </label>
                            <Controller
                                name="managerId"
                                control={control}
                                rules={{ required: 'Manager is required' }}
                                render={({ field }) => (
                                    <select
                                        {...field}
                                        id="manager"
                                        className={`w-full cursor-pointer border bg-[#FAFBFC] border-[#DFE1E6] rounded-sm ${errors.managerId ? 'border-red-500' : '' 
                                            }`}
                                    >
                                        <option value="">Select Manager</option>
                                        {managerData.map((manager: any) => (
                                            <option key={manager.user?._id} value={manager.user?._id} className='capitalize '>
                                                {manager.user?.name}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            />
                            {errors.managerId && <span className="text-red-500">{errors.managerId.message}</span>} 
                        </div>
                    </div>


                    <div className="flex justify-end cursor-pointer">
                        <button type="submit" className="bg-[#005D7F] cursor-pointer  text-white font-bold py-2 px-4 rounded w-[100%]">
                            Add
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

