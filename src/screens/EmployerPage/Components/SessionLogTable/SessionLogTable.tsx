import style from "./SessionLogTable.module.css";
import { Avatar, Backdrop, ClickAwayListener } from "@mui/material";
import TableHeaderCell from "@src/Components/Grid/TableHeaderCell/TableHeaderCell";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { basePath } from "@src/modules/axios/AxiosFactory";
interface Props {
    data: Employee.EmployeeData[];
}
const SessionLogTable = (props: Props) => {
    const [show, setShow] = useState({ idx: -1, val: -1 });
    const [sessionLogs, setSessionLogs] = useState<any>([])
    const [limit, setlimit] = useState(10)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const getLogginLogs = async () => {
        const { data } = await axios.get(`${basePath}auth/LogIn/companyLogIn/loginLogs?page=${page}&limit=${limit}`, { withCredentials: true })
        console.log(data)
        setSessionLogs([...data.logs])
        setTotal(data.count)

    }
    useEffect(() => {
        if (total > 0) {
            setPageCount(Math.ceil(total / limit));
        } else {
            setPageCount(Math.ceil(total / limit) + 1);
        }
    }, [total, limit]);
    useEffect(() => {
        getLogginLogs();
    }, [page, limit])
    return (
        <>
            <div
                className="border border-gray-100 m-5 mx-4 text-sm shadow rounded-xl"
                style={{ height: "auto", overflow: "hidden" }}
            >
                {/* TableHeader---- */}
                <div className="flex bg-white py-4 px-3 border-b-2 border-gray-100">
                    <div className="pt-2 pl-8">
                        <h1 className="font-medium text-base ">Session Logs</h1>
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
                            <TableHeaderCell text="Employee Name" />
                            <TableHeaderCell text="Role" />
                            <TableHeaderCell text="Login Time" />
                            <TableHeaderCell text="Device" />
                            <TableHeaderCell text="Phone Number" />
                        </thead>
                        <tbody>
                            {sessionLogs && sessionLogs.map((element: any, i: number) => {
                                const date = new Date(element.logInTime);
                                const options: any = {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true
                                };
                                const formattedDate = date.toLocaleString('en-US', options);
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
                                                    <Avatar src={element.user.profile} />
                                                </div>
                                                <p className="text-sm text-slate-800">{element.user.name}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-3 font-normal">
                                            <p className="text-sm text-slate-800">{element.user.role}</p>
                                        </td>
                                        <td className="px-6 py-3 font-normal">
                                            <p className="text-sm text-slate-800">{formattedDate}</p>
                                        </td>
                                        <td className="px-6 py-3 font-normal">
                                            <p className="text-sm text-slate-800">{element.device ? (element.device.userAgent).slice(13, 36) : "Not Avilable"}</p>
                                        </td>
                                        <td className="px-6 py-3 font-normal">
                                            <p className="text-sm text-slate-800">{element.user.phoneNumber}</p>
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
                            value={limit}
                            onChange={(event) => {

                                setlimit(Number(event.target.value));
                            }}
                        >
                            <option value="10">10</option>
                            <option value="1">1</option>
                            <option value="20">20</option>
                            <option value={total}>All</option>
                        </select>
                        <label className="text-zinc-400 pl-2">Items per page</label>
                        <label className="text-zinc-700 pl-4">1-{limit} of {total} items</label>
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
                                <button onClick={() => page > 1 ? setPage(page - 1) : alert("You reached on page 1")} >
                                    <Icon
                                        className="inline-block"
                                        icon="ic:round-keyboard-arrow-left"
                                        width="20"
                                    />
                                </button>
                                <button onClick={() => (page < pageCount) ? setPage(page + 1) : alert("You reached on maximum limit")}>
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
};

export default SessionLogTable;