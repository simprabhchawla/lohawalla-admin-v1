import { Avatar, Backdrop, ClickAwayListener } from "@mui/material";
import TableHeaderCell from "@src/Components/Grid/TableHeaderCell/TableHeaderCell";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import style from "./CurrentEmployeeTable.module.css";
import { useEmployerPageContext } from "@src/screens/EmployerPage/EmployerPage";
import edit from "../../../../Assets/Icons/EmployeePage/edit-05.svg";
import rolee from "../../../../Assets/Icons/EmployeePage/refresh-ccw-04.svg";
import closed from "../../../../assets_/icons/popup close.svg"
import change from "../../../../assets_/icons/changepass.svg"
import lock from "../../../../assets_/icons/pop upchangerole.svg"
import axios from "axios";
import { basePath } from "@src/modules/axios/AxiosFactory";
import toast from "react-hot-toast";
import deletess from "../../../../assets_/icons/Delete.svg"

interface Props {
	data: Employee.EmployeeData[];
}


export default function CurrentEmployeeTable(props: Props) {
	const [show, setShow] = useState({ idx: -1, val: -1 });
	const { state, employerActions } = useEmployerPageContext();
	const [role, setrole] = useState("")
	const [permission, setPermission] = useState("")

	const [Id, setId] = useState("")
	const [match, setMatch] = useState(false)
	const [password, setPassword] = useState("")
	const [tpassword, setTPassword] = useState("")
	const [limit, setlimit] = useState(10)
	const [page, setPage] = useState(1)
	const [isOpen, setIsOpen] = useState(false)
	const [isOpenPermission, setIsOpenPermission] = useState(false)


	const [isChangeOpen, setisChangeOpen] = useState(false)
	const [total, setTotal] = useState(0)
	const [pageCount, setPageCount] = useState(1)
	const getTotal = async () => {
		const { data } = await axios.get(`${basePath}admin/pages/employeeListing/getVerifiedEmployee`, { withCredentials: true })
		setTotal(data[0].totalVerifiedEmployee)
		if (total % limit > 0) {
			setPageCount(Math.ceil(total / limit));
		} else {
			setPageCount(Math.ceil(total / limit) + 1);
		}

	}
	getTotal()

	useEffect(() => {
		if (total % limit > 0) {
			setPageCount(Math.ceil(total / limit));
		} else {
			setPageCount(Math.ceil(total / limit) + 1);
		}
	}, [limit, page]);
	useEffect(() => {
		getTotal()
	}, [])
	useEffect(() => {
		const requestData = {
			page: page,
			limit: limit,
		};

		employerActions.getVerifiedEmployeeList(requestData);


	}, [limit, page, isOpen, isChangeOpen]);


	const openPopup = (id: any) => {
		setIsOpen(true)
		setId(id)
	}
	const closePopup = () => {
		setIsOpen(false)
	}

	const openPopupPermission = (id: any) => {
		setIsOpenPermission(true)
		setId(id)
	}
	const closePopupPermission = () => {
		setIsOpenPermission(false)
	}


	const openChangePopup = (id: any) => {
		setId(id)

		setisChangeOpen(true)


	}
	const closeChangePopup = () => {
		setisChangeOpen(false)
	}

	const handleSumbit = async () => {
		try {
			const { data } = await axios.patch(
				`${basePath}admin/pages/employeeListing/updateEmployeeRole/${Id}`,
				{
					role
				},
				{
					withCredentials: true
				}
			);

			toast.success("Role update Sucessfully")

			closePopup()
		}
		catch (err: any) {
			
			toast.error("Role not  update try again")
		}

	}
	const handlePasswordSumbit = async () => {

		try {
			const { data } = await axios.patch(
				`${basePath}admin/pages/employeeListing/updateEmployeePasword/${Id}`,
				{
					password
				},
				{
					withCredentials: true
				}
			);

			toast.success("Password update Sucessfully")
			closeChangePopup()
		}
		catch (err: any) {
			
			toast.error(err)
		}
	}
	const handleSumbitPermission = async () => {
		try {
			const { data } = await axios.patch(
				`${basePath}admin/pages/employeeListing/updateEmployeePermission/${Id}`,
				{
					permission
				},
				{
					withCredentials: true
				}
			);
			toast.success("Permission update Sucessfully")

			closePopupPermission()
		}
		catch (err: any) {
			console.log(err);
			toast.error("Permission not  update try again")
		}

	}



	const [showConfirmation, setShowConfirmation] = useState(false);
	const [employeeId, setEmployeeId] = useState('');

	const handleDeleteClick = (id: any) => {
		
		setEmployeeId(id);
		setShowConfirmation(true);
	}



	const deleteEmployee = async () => {
		try {
			const { data } = await axios.patch(
				`${basePath}admin/pages/employeeListing/inActiveUser/${employeeId}`,				
				{
					withCredentials: true
				}
				);
			toast.success("Employee Deleted Successfullly")
			setShowConfirmation(false);
			window.location.reload();

		}
		catch (err: any) {
			
			toast.error("error")
		}
	}

	const handleCancelClick = () => {
		setShowConfirmation(false);
	};

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
						<thead className="border-b w-full">
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
							<TableHeaderCell text="Permission" />
							<TableHeaderCell text="Aadhar" />
							<TableHeaderCell text="Password" />
							<TableHeaderCell text="Profile Image" />
							<TableHeaderCell text="Date Of Creation" />
							<TableHeaderCell text="Delete Employee" />
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
										dataPermissions,
										profile,
										dateOfCreation,
										id,
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
											<td className="px-6 py-5 flex gap-[5px] font-normal">
												<p className="text-sm text-slate-800">{role}</p>
												<img src={edit} alt="" onClick={() => openPopup(id)} className="w-[16px] cursor-pointer h-[16px]" />
											</td>
											<td className="px-6 py-3  font-normal">
												<div className="flex gap-2 ">
												<p className="text-sm text-slate-800">{dataPermissions?"True":"False"}</p>
												<img src={edit} alt="" onClick={() => openPopupPermission(id)} className="w-[16px] cursor-pointer h-[16px]" />

												</div>
											</td>

											<td className="px-6 py-1">
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
											<td onClick={() => openChangePopup(id)} className="px-6 flex cursor-pointer gap-[5px] py-3 font-normal">
												<p className="text-sm text-[#B72626]">
													Change
												</p>
												<img src={change} alt="" />
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
											<td className="px-6 cursor-pointer py-3 font-normal">
												<div className="flex gap-[5px]">
													<p
														className="text-sm text-slate-800"
														onClick={() => handleDeleteClick(id)}
													>
														Delete
													</p>
													<div>
														<img src={deletess} alt="Delete" onClick={() => handleDeleteClick(id)} />
													</div>
												</div>
											</td>
										</tr>
									);
								}
							)}
						</tbody>
					</table>
				</div>

				{isOpen && (
					<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
						<div className="bg-[#fff] px-[32px] py-[25px] w-[563px] h-[457px] rounded-[40px] shadow-lg flex flex-col">
							<div className="flex justify-end">
								<button onClick={closePopup}>
									<img src={closed} alt="" className="w-[32px] h-[32px]" />
								</button>
							</div>

							<div className="flex flex-col gap-[48px]">
								<div className="flex flex-col justify-center items-center gap-[6px]">
									<img src={lock} alt="" className="w-[56px] h-[56px]" />
									<h1 className="text-[40px] text-[#5C5C77] font-[700]">Change Role</h1>
								</div>

								<div className="flex flex-col gap-[56px]">
									<div className="flex flex-col gap-[10px]">
										<div className="text-[16px] font-bold"> Role </div>
										<select className="border border-[#9797AA] rounded-[8px]"
											value={role} onChange={(e) => setrole(e.target.value)}>
											<option value="">Select Role</option>
											<option value="ADMIN">Admin</option>
											<option value="CUSTOMER">CUSTOMER</option>
											<option value="PURCHASER">Purchaser</option>
										</select>
									</div>
									<button onClick={handleSumbit} className="bg-[#5C5C77] py-[16px] text-white rounded-[10px] text-[16px] font-bold">
										Save
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
				{isOpenPermission && (
					<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
						<div className="bg-[#fff] px-[32px] py-[25px] w-[563px] h-[457px] rounded-[40px] shadow-lg flex flex-col">
							<div className="flex justify-end">
								<button onClick={closePopupPermission}>
									<img src={closed} alt="" className="w-[32px] h-[32px]" />
								</button>
							</div>

							<div className="flex flex-col gap-[48px]">
								<div className="flex flex-col justify-center items-center gap-[6px]">
									<img src={lock} alt="" className="w-[56px] h-[56px]" />
									<h1 className="text-[40px] text-[#5C5C77] font-[700]">Change Data Permission</h1>
								</div>

								<div className="flex flex-col gap-[56px]">
									<div className="flex flex-col gap-[10px]">
										<select className="border border-[#9797AA] rounded-[8px]"
											value={role} onChange={(e) => setPermission(e.target.value)}>
											<option value="">Select Permission</option>
											<option value="true">Yes</option>
											<option value="false">No</option>
										</select>
									</div>
									<button onClick={handleSumbitPermission} className="bg-[#5C5C77] py-[16px] text-white rounded-[10px] text-[16px] font-bold">
										Save
									</button>
								</div>
							</div>
						</div>
					</div>
				)}


				{isChangeOpen && (
					<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
						<div className="bg-[#fff] px-[32px] py-[25px] w-[563px] h-[565px] rounded-[40px] shadow-lg flex flex-col">


							<div className="flex px-[56px] py-[53px] flex-col gap-[48px]">
								<div className="flex flex-col justify-center items-center gap-[6px]">
									<img src={lock} alt="" className="w-[56px] h-[56px]" />
									<h1 className="text-[40px] text-[#5C5C77] font-[700]">Change Password</h1>
								</div>

								<div className="flex flex-col gap-[56px]">
									<div className="flex flex-col gap-[10px]">
										<div className="text-[16px] font-bold"> New Password </div>
										<input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className="border border-[#9797AA] rounded-[8px]" />
									</div>
									<div className="flex flex-col gap-[10px]">
										<div className="text-[16px] font-bold"> Confirm Password </div>
										<input type="text" value={tpassword} onChange={(e) => setTPassword(e.target.value)} placeholder="Enter Password" className="border border-[#9797AA] rounded-[8px]" />
										{tpassword.length > 0 && password !== tpassword && <p className=" top-6 text-sm text-[#B72626]">Passwords do not match</p>}


									</div>

								</div>



								<div className="flex justify-center items-center gap-[25px]">

									<button onClick={closeChangePopup} className="flex w-[213px] bg-[#ebecee] text-center justify-center font-bold  rounded-[10px] py-[16px]">
										Cancel
									</button>
									{tpassword === password && tpassword.length > 0 &&
										<button onClick={handlePasswordSumbit} className="bg-[#5C5C77] w-[213px] text-center justify-center flex py-[16px] text-white rounded-[10px] text-[16px] font-bold">
											Save
										</button>
									}
								</div>
							</div>
						</div>
					</div>
				)}

				{showConfirmation && (
					<div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
						<div className="bg-white p-6 text-lg rounded-lg text-center">
							<p className="font-bold">Are you sure you want to delete?</p>
							<button
								className="bg-red-500 text-white px-4 py-2 rounded-md m-2"
								onClick={deleteEmployee}
							>
								Yes
							</button>
							<button
								className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md m-2"
								onClick={handleCancelClick}
							>
								No
							</button>
						</div>
					</div>
				)}

				<div className="flex bg-white border-t-2 border-gray-100 py-6 text-sm">
					<div className="px-3">
						<select
							className="bg-theme-btn-gray px-2 py-0.5 border-2 text-zinc-500 border-gray-50 rounded-lg"
							value={limit}
							onChange={(event) => {
								//
								setlimit(Number(event.target.value));
							}}
						>
							<option value="10">10</option>
							<option value="1">1</option>
							<option value="20">20</option>
							<option value={total}>All</option>
						</select>
						<label className="text-zinc-400 pl-2">Items per page</label>
						<label className="text-zinc-700 pl-4">{page > 1 ? (page - 1) * limit : 1}-{(page) * limit} of {total} items</label>
					</div>
					<div className="ml-auto px-6 flex items-center">
						<div
							className="bg-theme-btn-gray px-2 py-0.5 border-2 text-zinc-500 border-gray-50 rounded-lg"

						>
							<p >{page}</p>
						</div>
						<label className="text-zinc-700 pl-2">of {pageCount} pages</label>
						<label className="text-zinc-700 pl-4">
							<div className="inline-block">
								<button onClick={() => page > 1 ? setPage(page - 1) : alert("You reached on page 1")}>
									<Icon
										className="inline-block"
										icon="ic:round-keyboard-arrow-left"
										width="20"
									/>
								</button>
								<button onClick={() => (page < pageCount || pageCount == 0) ? setPage(page + 1) : alert("You reached on maximum limit")}>
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