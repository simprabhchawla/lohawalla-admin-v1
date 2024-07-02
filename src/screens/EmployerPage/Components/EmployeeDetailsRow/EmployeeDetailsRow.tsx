import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Backdrop, ClickAwayListener } from "@mui/material";
import style from "./EmployeeDetailsRow.module.css";

interface EmployeeRowProps {
	name: string;
	date: string;
	phone: string;
	aadhar: string;
	picture: string;
	onAccept: () => void;
	onCancel: () => void;
}

const EmployeeDetailsRow = ({
	name,
	date,
	phone,
	aadhar,
	picture,
	onAccept,
	onCancel,
}: EmployeeRowProps) => {
	const [show, setShow] = useState<number>(-1);
	return (
		<>
			<tr className={style.tableRow + " text-zinc-500"}>
				<td className="text-center pt-1">
					<input
						id="default-checkbox"
						type="checkbox"
						value=""
						className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
					/>
				</td>
				<td className="px-6 py-3 font-normal">
					<div>
						<p className="text-sm text-slate-800">{name}</p>
					</div>
				</td>
				<td className="px-6 py-3">
					<p className="text-sm">{date}</p>
				</td>
				<td className="px-6 py-3">
					<p className="text-sm">{phone}</p>
				</td>
				<td className="px-6 py-3">
					<div
						className="flex items-center hover:ring-1 hover:ring-slate-200 cursor-pointer p-2 rounded transition-all duration-500 delay-75"
						onClick={(e) => {
							e.stopPropagation();
							setShow(1);
						}}
					>
						<div className="mr-2">
							<p className="text-sm">Aadhar</p>
						</div>
						<Icon
							className="inline-block"
							icon="material-symbols:file-copy-outline"
							width="14"
						/>
					</div>
				</td>
				<td className="px-6 py-3">
					<div
						className="flex items-center hover:ring-1 hover:ring-slate-200 cursor-pointer p-2 rounded transition-all duration-500 delay-75"
						onClick={(e) => {
							e.stopPropagation();
							setShow(2);
						}}
					>
						<div className="mr-2">
							<p className="text-sm">Profile</p>
						</div>
						<Icon
							className="inline-block"
							icon="material-symbols:file-copy-outline"
							width="14"
						/>
					</div>
				</td>
				<td className="px-6 py-3">
					<button
						className="bg-green-100 font-semibold text-green-800 px-5 py-1 rounded-lg hover:bg-green-800 hover:text-white transition-colors"
						onClick={onAccept}
					>
						Accept
					</button>
				</td>
				<td className="px-6 py-3">
					<button
						className="bg-slate-100 font-semibold text-slate-800 px-5 py-1 rounded-lg hover:bg-slate-800 hover:text-white transition-all"
						onClick={onAccept}
					>
						Cancel
					</button>
				</td>
			</tr>
			<Backdrop open={show !== -1}>
				<ClickAwayListener
					onClickAway={() => {
						setShow(-1);
					}}
				>
					<img
						src={show === 1 ? aadhar : picture}
						alt="the picture"
						style={{
							width: "50vmin",
							height: "50vmax",
							objectFit: "contain",
							objectPosition: "center",
						}}
					/>
				</ClickAwayListener>
			</Backdrop>
		</>
	);
};

export default EmployeeDetailsRow;
