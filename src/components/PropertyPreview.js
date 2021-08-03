import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import PropertyPreviewSlider from "./PropertyPreviewSlider";

const PropertyPreview = () => {
	return (
		<div className="property-preview">
			<div className="flex items-end flex-wrap mb-6">
				<div className="">
					<h1 className="text-2xl font-medium mb-1">
						Cozy Queen 2 Bedroom w/ Free Street Parking
					</h1>
					<p className="text-sm text-gray-500">
						Jersey City, New Jersey, United States
					</p>
				</div>
				<div className="font-medium text-base ml-auto mt-4">
					<div className="mr-4 inline-flex items-center ">
						<FiShare className="mr-1" />
						<span className="border-b border-white underline">Share</span>
					</div>
					<div className="inline-flex items-center">
						<AiOutlineHeart className="mr-1" />
						<span className="border-b border-white underline">Save</span>
					</div>
				</div>
			</div>
			<PropertyPreviewSlider />
			<div className="hidden md:grid grid-cols-2 rounded-3xl overflow-hidden">
				<div className="mr-2 relative">
					<Image
						src={require("../media/location_img/road.jpg")}
						layout="responsive"
						objectFit="cover"
					/>
				</div>

				<div className="grid grid-cols-2 grid-rows-2">
					<div className="mr-1 mb-1 relative">
						<Image
							src={require("../media/location_img/road.jpg")}
							objectFit="cover"
							layout="fill"
						/>
					</div>
					<div className="ml-1 mb-1 relative">
						<Image
							src={require("../media/location_img/road.jpg")}
							objectFit="cover"
							layout="fill"
						/>
					</div>
					<div className="mr-1 mt-1 relative">
						<Image
							src={require("../media/location_img/road.jpg")}
							objectFit="cover"
							layout="fill"
						/>
					</div>
					<div className="ml-1 mt-1 relative">
						<Image
							src={require("../media/location_img/road.jpg")}
							objectFit="cover"
							layout="fill"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyPreview;
