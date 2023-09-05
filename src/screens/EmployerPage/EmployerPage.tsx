import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import EmployeeDetailsTable from "./Components/EmployeeDetailsTable/EmployeeDetailsTable";
import Sidebar from "../../Components/Sidebar";
import EmployeeSummary from "./Components/EmployeeSummary/EmployeeSummary";
import EmployerAction from "./actions/EmployerAction";
import AsyncStateFactory from "@src/modules/StateManagement/AsyncState/AsyncStateFactory";
import useHeight from "@src/modules/hooks/useHeight";
import EmployeePageTabs from "./Components/EmployeePageTabs/EmployeePageTabs";
import CurrentEmployeeTable from "./Components/CurrentEmployeeTable/CurrentEmployeeTable";
import SessionLogTable from "./Components/SessionLogTable/SessionLogTable";

interface ContextProps {
	state: Employee.State;
	employerActions: EmployerAction;
}

const EmployerPageContext = React.createContext({} as ContextProps);
export const useEmployerPageContext = () => useContext(EmployerPageContext);

const Employe = () => {
	const [state, setState] = useState<Employee.State>({
		showForm: false,
		fetchPendingEmployeeList: [],
		verifiedEmployeeList: [],
		loading: {
			get: AsyncStateFactory(),
		},
		currentTab: 0,
		refresh: false,
	});

	const employerActions = new EmployerAction(state, setState);

	useEffect(() => {
		/*const data={
			page:1,
			limit:10
		}*/
		//employerActions.getPendingEmployeeListing();
		//employerActions.getVerifiedEmployeeList(data);
	}, [state.refresh]);

	const heightHandle = useHeight();

	return (
		<EmployerPageContext.Provider value={{ state, employerActions }}>
			<div className="flex w-full " style={{ height: "100vh" }}>
				<div>
					<Sidebar />
				</div>
				<div className="flex grow flex-col overflow-auto bg-[#F4F5FA]">
					<div ref={heightHandle.ref}>
						<Navbar Pagename="Employee" />
					</div>
					<div
						className="py-8 px-8"
						style={{
							height: `calc( 100vh - ${heightHandle.height}px )`,
							overflow: "auto",
						}}
					>
						<EmployeeSummary />
						<div className="py-4 px-4 ">
							<div className="border-b">
								<EmployeePageTabs
									value={state.currentTab}
									setValue={function (n: number): void {
										employerActions.mutateState((p) => {
											p.currentTab = n;
										});
									}}
									pendingCount={state.fetchPendingEmployeeList.length}
								/>
							</div>
						</div>
						{state.currentTab === 0 && <EmployeeDetailsTable />}
						{state.currentTab === 1 && <CurrentEmployeeTable data={state.verifiedEmployeeList} />}
						{state.currentTab === 2 && <SessionLogTable data={state.verifiedEmployeeList} />}
					</div>
				</div>
			</div>
		</EmployerPageContext.Provider>
	);
};

export default Employe;
