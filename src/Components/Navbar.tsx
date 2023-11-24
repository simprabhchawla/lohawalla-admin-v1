import React from "react";
import { Icon } from "@iconify/react";
import AdminImg from "../Assets/EmployerPage/UserTestPic.png";
import Clock from "./common/Clock/Clock";
import { useAuthGuardContext } from "@src/auth/AuthGuard/AuthGuard";
import { Avatar } from "@mui/material";

interface PageNameProps {
	Pagename: string;
}

const Navbar = ({ Pagename }: PageNameProps) => {
	const { loginData } = useAuthGuardContext();
	console.log(loginData);
	return (
		<div className="">
			<div className="bg-white flex border-b-2 border-gray-100 py-2 px-4 ">
				<div>
					<h1 className="text-xl font-medium text-zinc-700 tracking-wider fontPoppins">
						{Pagename}
					</h1>
				</div>
				<div className="ml-auto flex">
					<div className="mr-5">
						<Clock />
					</div>
					<button className="text-sm border rounded-[8px] px-3 flex items-center active:brightness-95 mr-3">
						<p className="mr-1">Simprabh Singh Chawla</p>
						<Icon
							className="inline-block font-bold"
							icon="material-symbols:keyboard-arrow-down-rounded"
							width="24"
						/>
					</button>
					<div>
						<Avatar src={loginData?.image} sizes="small" />
					</div>
				</div>
			</div>

			<div className="bg-white px-4 py-1 mr-auto">
				<div className="flex">
					<Icon
						className="inline-block"
						icon="material-symbols:home"
						color="#6366f1"
						width="20"
					/>
					<p className="inline-block relative top-0.5 text-gray-400 pl-2 text-sm">
						/
					</p>
				</div>
			</div>
			{/* <LoginForm/> */}
		</div>
	);
};

export default Navbar;
