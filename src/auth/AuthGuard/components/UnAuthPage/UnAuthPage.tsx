import RotateAndScale from "@src/Components/interactions/RotateAndScale/RotateAndScale";
import ScaleOnHover from "@src/Components/interactions/ScaleOnHover/ScaleOnHover";
import AssetIndex, { ImageIndex } from "@src/assets_/AssetIndex";
import React, { useEffect } from "react";

interface Props {
	login?: () => void;
}

export default function UnAuthPage(props: Props) {


	return (
		<div className="w-full">
			{/* header */}
			<div className="h-12 p-14">
				<AssetIndex.LohawallaLogo />
			</div>

			<div className="px-14 py-10">
				<div>
					<div className="flex">
						<div className="basis-2/5">
							<h1 className="text-3xl font-bold text-indigo-500 mb-8 leading-tighter">
								Unauthorized
							</h1>
							<p className="text-regular text-slate-800 basis-1/2 mb-5">
								Please Login or signup to view the following page
							</p>
							<RotateAndScale
								config={{
									rotate: 0,
									scale: 1.05,
								}}
							>
								<button
									className="px-12 py-4 bg-indigo-600 text-white rounded-full"
									onClick={() => {
										props.login && props.login();
										window.location.replace('https://www.lohawalla.com/')
										// window.location.replace('http://localhost:3000/')
										// window.location.replace('https://lohawalla.onrender.com/')
									}}
								>
									Login
								</button>
							</RotateAndScale>
						</div>
						<div className="basis-1/2">
							<img
								src={ImageIndex.UnAuthImage}
								alt="unauth image"
								style={{
									objectFit: "contain",
									width: "100%",
									height: "500px  ",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
