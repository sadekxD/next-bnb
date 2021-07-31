import Image from "next/image";

const ExperienceCard = () => {
	return (
		<div className="mr-4">
			<Image
				src={require("../../media/location_img/road.jpg")}
				objectFit="cover"
				layout="responsive"
				className="rounded-lg"
			/>
			<h5 className="mt-1 font-medium text-lg">Online Experience</h5>
			<p className="font-medium text-xs">
				Travel the world without leaving home.
			</p>
		</div>
	);
};

export default ExperienceCard;
