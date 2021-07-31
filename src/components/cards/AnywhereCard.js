import Image from "next/image";

const AnywhereCard = () => {
	return (
		<div className="mr-4">
			<Image
				src={require("../../media/location_img/road.jpg")}
				objectFit="cover"
				layout="responsive"
				className="rounded-lg"
			/>
			<h5 className="mt-1 font-medium text-lg">Pets Welcome</h5>
		</div>
	);
};

export default AnywhereCard;
