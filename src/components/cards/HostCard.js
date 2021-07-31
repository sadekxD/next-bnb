import Image from "next/image";

const HostCard = () => {
	return (
		<div className="mr-4">
			<Image
				src={require("../../media/location_img/road.jpg")}
				objectFit="cover"
				layout="responsive"
				className="rounded-lg"
			/>
			<h5 className="mt-1 font-medium text-lg">Host your home</h5>
		</div>
	);
};

export default HostCard;
