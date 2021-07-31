import Image from "next/image";
import React from "react";

export default function LocationCard({ image, location, reach_time }) {
	return (
		<div className="flex items-center pb-4">
			<Image
				src={require("../../media/location_img/road.jpg")}
				height="64"
				width="64"
				objectFit="cover"
				className="rounded-lg"
			/>
			<div className="location-text ml-4">
				<h1 className="font-medium">{location}</h1>
				<p>{reach_time}</p>
			</div>
		</div>
	);
}
