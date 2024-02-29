import React, { useEffect, useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import CustomerDetailsRow from "../EmployeeDetailsRow/EmployeeDetailsRow";
import { Icon } from "@iconify/react";
import EmployeeDetailsRow from "../EmployeeDetailsRow/EmployeeDetailsRow";
import { ReactComponent as SortIcon } from "../../../../Assets/Icons/EmployeePage/SortIcon.svg";
import { useEmployerPageContext } from "@src/screens/EmployerPage/EmployerPage";
import style from "./EmployeeDetailsTable.module.css";
import { basePath } from "@src/modules/axios/AxiosFactory";
import axios from "axios";

const CustomerDetails = () => {
	const { state, employerActions } = useEmployerPageContext();
	const [limit, setlimit] = useState(10)
	const [page, setPage] = useState(1)
	const [pageCount, setPageCount] = useState(1)
	const [total, setTotal] = useState(0)
	const getTotal = async () => {
		const { data } = await axios.get(`${basePath}admin/pages/Dashboard/getPendingEmployeeListing?`, { withCredentials: true })
		
		if (data.length > 0) {
			setTotal(data[0].totalPendingEmployees)
			setPageCount(Math.ceil(total / limit));
		}
	}
	useEffect(() => {
		if (total % limit > 0) {
			setPageCount(Math.ceil(total / limit));
		} else {
			setPageCount(Math.ceil(total / limit) + 1);
		}
	}, [limit, page]);
	useEffect(() => {
		const requestData = {
			page: page,
			limit: limit,
		};

		

		employerActions.getPendingEmployeeList(requestData);


	}, [limit, page]);
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
					{/* <div className="ml-auto flex ">
						<div className="relative text-gray-600">
							<input
								className="border-2 border-gray-300 bg-white h-8 px-10 w-52  text-xs focus:outline-none"
								type="search"
								name="search"
								placeholder="Search"
							/>
							<button
								type="submit"
								className="absolute left-2 bottom-1 mt-2 mr-2"
							>
								<Icon
									icon="material-symbols:search"
									width="24"
									className="text-gary-600"
								/>
							</button>
						</div>

						<div className="ml-2">
							<button className=" px-2 py-1.5  text-xs border-2 border-gray-400 ">
								<Icon
									className="inline-block rotate-45 relative bottom-0.5"
									icon="ic:outline-send"
									width="18"
									rotate={3}
								/>{" "}
								export to excel
							</button>
						</div>
					</div> */}
				</div>

				{/* TableContent----------------------------------------------------------- */}
				<div className="w-full overflow-auto">
					<table className="w-full border-collapse bg-white text-left">
						{/* Table Row */}
						<thead className="bg-white">
							<tr className={style.tableRow}>
								<th scope="col" className="px-4 py-5 font-medium text-gray-900">
									<input
										id="default-checkbox"
										type="checkbox"
										value=""
										className="w-5 h-5  rounded-lg"
									/>
								</th>
								<th
									scope="col"
									className="px-1 py-5 font-normal text-zinc-800 inline-block"
								>
									Employee Name
									<span className="pl-0.5 inline-block relative top-0.5">
										<SortIcon />
									</span>
								</th>
								<th scope="col" className="px-6 py-5 font-normal text-zinc-800">
									Request Date{" "}
									<span className="pl-0.5 inline-block relative top-0.5">
										<SortIcon />
									</span>
								</th>
								<th scope="col" className="px-6 py-5 font-normal text-zinc-800">
									Contact number{" "}
									<span className="pl-0.5 inline-block relative top-0.5">
										<SortIcon />
									</span>
								</th>
								<th scope="col" className="px-6 py-5 font-normal text-zinc-800">
									Aadhar Card
									<span className="pl-0.5 inline-block relative top-0.5">
										<SortIcon />
									</span>
								</th>

								<th scope="col" className="px-6 py-5 font-normal text-zinc-800">
									Profile Picture{" "}
									<span className="pl-0.5 inline-block relative top-0.5">
										<SortIcon />
									</span>
								</th>
								<th scope="col" className="px-6 py-5 font-normal text-zinc-800">
									Action{" "}
									<span className="pl-0.5 inline-block relative top-0.5">
										<SortIcon />
									</span>
								</th>
								<th scope="col" className="px-6 py-5 font-normal text-zinc-800">
									Reject{" "}
									<span className="pl-0.5 inline-block relative top-0.5">
										<SortIcon />
									</span>
								</th>

							</tr>
						</thead>
						{/* Table Contents */}
						<tbody className=" border-t border-gray-200 ">
							{state.fetchPendingEmployeeList.map((v, i) => (
								<EmployeeDetailsRow
									key={i}
									name={v.name}
									date={v.dateOfCreation}
									phone={v.phoneNumber}
									aadhar={v.aadhar}
									picture={v.profile}
									onAccept={() => employerActions.editUser(v.id)}
									onCancel={() => employerActions.deleteUser(v.id)}
								/>
							))}
						</tbody>
					</table>
				</div>

				{/* Pagination for table */}
				<div className="flex bg-white border-t-2 border-gray-100 py-6 text-sm">
					<div className="px-3">
						<select
							className="bg-theme-btn-gray px-2 py-0.5 border-2 text-zinc-500 border-gray-50 rounded-lg"
							value={limit}
							onChange={(event) => {
								
								setlimit(Number(event.target.value));
							}}
						>
							<option value="10">10</option>
							<option value="1">1</option>
							<option value="20">20</option>
							<option value="ALl">All</option>
						</select>
						<label className="text-zinc-400 pl-2">Items per page</label>
						<label className="text-zinc-700 pl-4">{total == 0 ? 0 : (page > 1 ? (page - 1) * limit : 1) + "-" + ((page) * limit)} of {total} items</label>
					</div>
					<div className="ml-auto px-6 flex items-center">
						<div
							className="bg-theme-btn-gray px-2 py-0.5 border-2 text-zinc-500 border-gray-50 rounded-lg"

						>
							<p>{page}</p>
						</div>
						<label className="text-zinc-700 pl-2">of {pageCount} pages</label>
						<label className="text-zinc-700 pl-4">
							<div className="inline-block">
								<button onClick={() => page > 1 ? setPage(page - 1) : alert("You reached on page 1")} >
									<Icon
										className="inline-block"
										icon="ic:round-keyboard-arrow-left"
										width="20"
									/>
								</button>
								<button onClick={() => (page < pageCount || pageCount == 0) ? setPage(page + 1) : alert("you reched pn maximum")}>
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
		</>
	);
};

export default CustomerDetails;