import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import users from "../../assets_/icons/UserCircle.svg"
import logo from "../../assets_/image/Lohawalla.png"

const LoginPage = () => {
    const [email, setEmail] = useState('lohawalla@chawlaispat.com');
    const [password, setPassword] = useState('Simp@1234');
    const [showPassword, setShowPassword] = useState(false);

    const data = {
        email: email,
        password: password,
    }

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/auth/LogIn/companyLogIn/companyUserLogin', data, {                
                withCredentials: true
            });
            const loginData = response.data.loginData
            
            if (loginData.role === "ADMIN") {
                window.localStorage.setItem("userData", JSON.stringify(loginData));
                console.log("hello")
                window.location.replace("/")
            }
            else {

            }

            console.log("hiii", response.data);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <>

            <div className="w-full flex overflow-hidden" style={{ height: "100vh" }}>
                <div className="w-[70%] bg-[#2A333E] p-12">
                    <div style={{ marginBottom: 100 }}>
                        <img src={logo} alt="" />
                    </div>
                    <div className="mb-12">
                        <div className="flex">
                            <p className="text-xl text-slate-400 font-medium mr-5">
                                Welcome to
                            </p>
                            {/* <img src={ImageIndex.HelloHand} alt="" /> */}
                        </div>
                        <h1 className="text-4xl font-bold text-white">Lohawalla</h1>
                    </div>

                </div>
                <div className="w-[100%] h-full p-16 flex items-center justify-center overflow-auto">

                    <div className='flex gap-[30px] w-[560px] h-fit-content flex-col text-center justify-center items-center py-[32px] px-[40px] shadow-2xl border rounded-[40px]'>
                        <div className='flex flex-col items-center justify-center'>
                            <img src={users} alt="" />
                            <h1 className='text-[2.5rem] text-[#334155] font-bold'>LOGIN</h1>
                            <p className='text-[#64748B] font-medium text-[16px] '>Login portal for admin, sales and purchaser</p>
                        </div>

                        <div className='flex flex-col gap-[10px]'>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-[400px] text-gray-700 border rounded-md py-2 px-3 "
                                    placeholder="Enter your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className="mb-4 relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="w-[400px] text-gray-700 border rounded-md py-2 px-3 "
                                    placeholder="Enter your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                <span
                                    className="absolute right-3 top-3 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? '🙈' : '👁️'}
                                </span>
                            </div>
                        </div>


                        <div className='flex flex-col gap-[10px]'>

                            <button
                                className="h-[50px] w-[400px] bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                            {/* <div className="flex justify-center cursor-pointer group">
                                <Link to={"/signup"}>
                                    <p className="text-sm font-medium text-slate-500 group-hover:text-indigo-500 select-none">
                                        dont have an account? Signup
                                    </p>
                                </Link>
                            </div> */}
                        </div>


                    </div>
                </div>

            </div>
        </>
    );
};

export default LoginPage;
