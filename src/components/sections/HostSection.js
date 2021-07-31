import HostCard from "../cards/HostCard";

const HostSection = () => {
	return (
		<section className="px-4 md:px-8 lg:px-12 py-8 text-gray-900">
			<h1 className="font-bold text-3xl">Join millions of hosts on Airbnb</h1>
			<div className="overflow-x-auto no-scrollbar mt-6">
				<div className="mt-6 grid grid-cols-3" style={{ minWidth: 768 }}>
					<HostCard />
					<HostCard />
					<HostCard />
				</div>
			</div>
		</section>
	);
};

export default HostSection;
