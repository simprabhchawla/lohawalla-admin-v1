import React, { useEffect, useState } from "react";

import style from "./Clock.module.css";
import getTime from "./Behavior/getTime";
import { motion } from "framer-motion";
import ScaleOnHover from "@src/Components/interactions/ScaleOnHover/ScaleOnHover";

interface ClockState {
	hr: string;
	mn: string;
	sc: string;
	sector: "am" | "pm";
}

function Clock() {
	const [clock, setClock] = useState<ClockState>(getTime());

	useEffect(() => {
		setInterval(() => {
			setClock(getTime());
		}, 1000);
	}, []);

	return (
		<ScaleOnHover scaleAmount={1}>
			<div
				className={
					style.container +
					" cursor-pointer hover:bg-slate-50 transition-all hover:shadow-sm"
				}
			>
				<p className="text-sm  py-[5px] font-medium text-slate-500">
					{clock.hr} : {clock.mn} {clock.sector}
				</p>
			</div>
		</ScaleOnHover>
	);
}

export default Clock;
