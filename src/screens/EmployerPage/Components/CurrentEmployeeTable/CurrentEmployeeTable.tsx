import { Avatar, Backdrop, ClickAwayListener } from "@mui/material";
import TableHeaderCell from "@src/Components/Grid/TableHeaderCell/TableHeaderCell";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import style from "./CurrentEmployeeTable.module.css";

interface Props {
	data: Employee.EmployeeData[];
}

export default function CurrentEmployeeTable(props: Props) {
	const [show, setShow] = useState({ idx: -1, val: -1 });

	return (
		<>
			<div
				className="border border-gray-100 m-5 mx-4 text-sm shadow rounded-xl"
				style={{ height: "auto", overflow: "hidden" }}
			>
				{/* TableHeader---- */}
				<div className="flex bg-white py-4 px-3 border-b-2 border-gray-100">
					<div className="pt-2 pl-8">
						<h1 className="font-medium text-base ">Employees</h1>
					</div>
				</div>
				<div style={{ overflowX: "auto" }}>
					<table className={style.table + " bg-white w-full table-auto"}>
						<thead className="border-b">
							<th
								scope="col"
								className="px-6 py-5 font-medium text-gray-900"
								style={{ width: 100 }}
							>
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									className="w-5 h-5  rounded-lg"
								/>
							</th>
							<TableHeaderCell text="Name" />
							<TableHeaderCell text="Email" />
							<TableHeaderCell text="Phone Number" />
							<TableHeaderCell text="Role" />
							<TableHeaderCell text="Aadhar" />
							<TableHeaderCell text="Profile Image" />
							<TableHeaderCell text="Date Of Creation" />
						</thead>
						<tbody>
							{props.data.map(
								(
									{
										name,
										email,
										phoneNumber,
										role,
										aadhar,
										profile,
										dateOfCreation,
									},
									i
								) => {
									return (
										<tr key={i}>
											<td className="text-center pt-1 max-w-xl">
												<input
													id="default-checkbox"
													type="checkbox"
													value=""
													className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
												/>
											</td>
											<td className="px-6 py-3 font-normal">
												<div
													className="flex items-center"
													style={{ minWidth: 200 }}
												>
													<div className="mr-2">
														<Avatar src={profile} />
													</div>
													<p className="text-sm text-slate-800">{name}</p>
												</div>
											</td>
											<td className="px-6 py-3 font-normal">
												<p className="text-sm text-slate-800">{email}</p>
											</td>
											<td className="px-6 py-3 font-normal">
												<p className="text-sm text-slate-800">{phoneNumber}</p>
											</td>
											<td className="px-6 py-3 font-normal">
												<p className="text-sm text-slate-800">{role}</p>
											</td>
											<td className="px-6 py-3">
												<div
													className="flex items-center hover:ring-1 hover:ring-slate-200 cursor-pointer p-2 rounded transition-all duration-500 delay-75"
													onClick={(e) => {
														e.stopPropagation();
														setShow({ idx: i, val: 1 });
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
														setShow({ idx: i, val: 1 });
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
											<td className="px-6 py-3 font-normal">
												<p className="text-sm text-slate-800">
													{dateOfCreation}
												</p>
											</td>
										</tr>
									);
								}
							)}
						</tbody>
					</table>
				</div>

				<div className="flex bg-white border-t-2 border-gray-100 py-6 text-sm">
					<div className="px-3">
						<select
							className="bg-theme-btn-gray px-2 py-0.5 border-2 text-zinc-500 border-gray-50 rounded-lg"
							placeholder="10"
						>
							<option value="10">10</option>
							<option value="1">1</option>
							<option value="20">20</option>
							<option value="ALl">All</option>
						</select>
						<label className="text-zinc-400 pl-2">Items per page</label>
						<label className="text-zinc-700 pl-4">1-10 of 200 items</label>
					</div>
					<div className="ml-auto px-6">
						<select
							className="bg-theme-btn-gray px-2 py-0.5 border-2 text-zinc-500 border-gray-50 rounded-lg"
							placeholder="10"
						>
							<option value="10">1</option>
						</select>
						<label className="text-zinc-700 pl-2">of 44 pages</label>
						<label className="text-zinc-700 pl-4">
							<div className="inline-block">
								<button>
									<Icon
										className="inline-block"
										icon="ic:round-keyboard-arrow-left"
										width="20"
									/>
								</button>
								<button>
									<Icon
										className="inline-block"
										icon="material-symbols:keyboard-arrow-right"
										width="20"
									/>
								</button>
							</div>
						</label>
					</div>
				</div>
			</div>
			<Backdrop open={show.val !== -1}>
				<ClickAwayListener
					onClickAway={() => {
						setShow({ idx: -1, val: -1 });
					}}
				>
					{show.idx !== -1 ? (
						<img
							src={
								show.idx === 1
									? props.data[show.idx].profile
									: props.data[show.idx].aadhar
							}
							alt="the picture"
							style={{
								width: "50vmin",
								height: "50vmax",
								objectFit: "contain",
								objectPosition: "center",
							}}
						/>
					) : (
						<></>
					)}
				</ClickAwayListener>
			</Backdrop>
		</>
	);
}
