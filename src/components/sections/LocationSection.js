import locations from "../../data/locations.json";
import LocationCard from "../cards/LocationCard";

const LocationSection = () => {
	return (
		<section className="px-4 md:px-8 lg:px-12 py-8 overflow-x-auto text-gray-900 no-scrollbar">
			<div className="grid grid-cols-4" style={{ minWidth: 768 }}>
				{locations.map(({ location, image, reach_time }, i) => (
					<LocationCard key={i} location={location} reach_time={reach_time} />
				))}
			</div>
		</section>
	);
};

export default LocationSection;
