import ExperienceCard from "../cards/ExperienceCard";

const ExperienceSection = () => {
	return (
		<section className="px-4 md:px-8 lg:px-12 py-8 bg-black text-white">
			<h1 className="font-bold text-3xl">Experience the world</h1>
			<p className="text-sm font-medium mt-2">
				Unique activities with local experts—in person or online.
			</p>
			<div className="overflow-x-auto no-scrollbar mt-6">
				<div className="mt-6 grid grid-cols-3" style={{ minWidth: 768 }}>
					<ExperienceCard />
					<ExperienceCard />
					<ExperienceCard />
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
