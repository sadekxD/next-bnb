import { Tab } from "@headlessui/react";
import categories from "../../data/tabs.json";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const TabsSections = () => {
	return (
		<section className="px-4 md:px-8 lg:px-12 py-8 text-gray-900 font-">
			<h1 className="font-bold text-3xl mb-6">
				Join millions of hosts on Airbnb
			</h1>
			<Tab.Group>
				<Tab.List className="flex space-x-1 border-b">
					{Object.keys(categories).map((category) => (
						<Tab
							key={category}
							className={({ selected }) =>
								classNames(
									"text-sm leading-5 font-medium rounded-none",
									selected ? "border-b-4 border-gray-900" : "border-none"
								)
							}
						>
							<div className="py-2.5 px-2.5 rounded-xl transition-all duration-100 hover:bg-gray-100 hover:bg-opacity-40">
								{category}
							</div>
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{Object.values(categories).map((places, idx) => (
						<Tab.Panel
							key={idx}
							className={classNames("bg-white rounded-xl p-3")}
						>
							<div className="grid lg:grid-cols-4 grid-cols-2">
								{places.map((place, idx) => (
									<div key={idx} className="text-sm mb-4">
										<h5 className="font-medium mb-1">{place.city}</h5>
										<p>{place.state}</p>
									</div>
								))}
							</div>
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</section>
	);
};

export default TabsSections;
