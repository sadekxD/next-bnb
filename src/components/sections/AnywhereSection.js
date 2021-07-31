import React from "react";
import AnywhereCard from "../cards/AnywhereCard";

const AnywhereSection = () => {
	return (
		<section className="px-4 md:px-8 lg:px-12 py-8 text-gray-900">
			<h1 className="font-bold text-3xl">Live Anywhere</h1>
			<div className="overflow-x-auto no-scrollbar">
				<div className="mt-6 grid grid-cols-4" style={{ minWidth: 768 }}>
					<AnywhereCard />
					<AnywhereCard />
					<AnywhereCard />
					<AnywhereCard />
				</div>
			</div>
		</section>
	);
};

export default AnywhereSection;
