import { Tab, Tabs } from "@mui/material";
import React from "react";

interface Props {
	value: number;
	pendingCount: number;
	setValue: (n: number) => void;
}

export default function EmployeePageTabs(props: Props) {
	const { value, setValue, pendingCount } = props;
	return (
		<Tabs
			value={value}
			onChange={(e, v) => {
				setValue(v);
			}}
		>
			<Tab
				sx={{
					fontWeight: 500,
					textTransform: "none",
					color: "gray",
					"&.Mui-selected": {
						color: "#374151",
						borderColor: "#374151",
					},
					maxWidth: "1000px",
				}}
				label={
					<div className="flex items-center">
						<p className="mr-2" style={{ fontFamily: "inherit" }}>
							Pending
						</p>
						<div className="px-[10px] py-[2px] rounded-full bg-red-500">
							<p
								className=" bg-red-500 text-white font-medium"
								style={{ fontFamily: "inherit" }}
							>
								{pendingCount}
							</p>
						</div>
					</div>
				}
			/>
			<Tab
				sx={{
					fontWeight: 500,
					textTransform: "none",
					color: "gray",
					"&.Mui-selected": {
						color: "#374151",
						borderColor: "#374151",
					},
				}}
				label={
					<p className="mr-2" style={{ fontFamily: "inherit" }}>
						Confirmed
					</p>
				}
			/>
			<Tab
				sx={{
					fontWeight: 500,
					textTransform: "none",
					color: "gray",
					"&.Mui-selected": {
						color: "#374151",
						borderColor: "#374151",
					},
				}}
				label={
					<p className="mr-2" style={{ fontFamily: "inherit" }}>
						Session Logs
					</p>
				}
			/>
		</Tabs>
	);
}
