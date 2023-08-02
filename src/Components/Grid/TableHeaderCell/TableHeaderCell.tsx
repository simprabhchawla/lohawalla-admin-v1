import React from "react";

import { ReactComponent as SortIcon } from "../../../Assets/Icons/EmployeePage/SortIcon.svg";

interface Props {
	text: string;
}

export default function TableHeaderCell(props: Props) {
	const { text } = props;
	return (
		<th className=" py-5 px-6 font-normal" style={{ color: "gray" }}>
			<p className="text-sm" style={{ fontFamily: "Inter", textAlign: "left" }}>
				{text}
				<span className="pl-0.5 inline-block relative top-0.5">
					<SortIcon />
				</span>
			</p>
		</th>
	);
}
