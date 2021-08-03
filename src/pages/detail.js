import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillFlagFill } from "react-icons/bs";

import PropertyCardDetail from "../components/cards/PropertyCardDetail";
import PropertyPreview from "../components/PropertyPreview";

const detail = () => {
	return (
		<div className="mt-40 px-4 md:px-14 lg:px-20 py-8">
			<PropertyPreview />
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
				<div className="col-span-12 lg:col-span-8 border-b">
					<div className="flex items-center py-4 flex-wrap border-b mb-6">
						<div className="mb-4 md:mb-0">
							<h1 className="font-medium mb-1 text-xl">
								Entire apartment hosted by Timothy And Natalia
							</h1>
							<p className="text-gray-500">
								2 guest . studio . 0 beds . 1 bath
							</p>
						</div>
						<div className="overflow-hidden rounded-full h-10 w-10 ml-auto">
							<Image
								src={require("../media/avatar.jpg")}
								objectFit="cover"
								layout="responsive"
								width={40}
								height={40}
							/>
						</div>
					</div>
					<div className="border-b">
						<PropertyCardDetail />
						<PropertyCardDetail />
						<PropertyCardDetail />
						<PropertyCardDetail />
						<PropertyCardDetail />
						<PropertyCardDetail />
					</div>
					<div className="py-8 border-b">
						Awesome 2 Bedroom apartment located on the ground floor of a multi
						unit building near the Light Rail. Clean bright apartment with Queen
						Bedrooms each with a flat screen TV and Netflix provided. Ideal for
						groups of up to 4 but can sleep 5 with the couch that lays to a bed
						in living room. Full kitchen and dining space. Street Parking is
						available and Free but competitive. Need to read signs for street
						cleaning.
					</div>
					<div className="py-4 border-b">
						<h1 className="font-medium mb-2 text-xl">Sleeping arrangements</h1>
						<div className="no-scrollbar overflow-x-auto">
							<div className="grid grid-cols-3 gap-4" style={{ minWidth: 768 }}>
								<div className="">
									<Image
										src={require("../media/avatar.jpg")}
										objectFit="cover"
										layout="responsive"
										className="rounded-xl"
									/>
									<h2 className="font-medium mb-1">Bedroom 1</h2>
									<p>1 Queen bed</p>
								</div>
								<div className="">
									<Image
										src={require("../media/avatar.jpg")}
										objectFit="cover"
										layout="responsive"
										className="rounded-xl"
									/>
									<h2 className="font-medium mb-1">Bedroom 1</h2>
									<p>1 Queen bed</p>
								</div>
								<div className="">
									<Image
										src={require("../media/avatar.jpg")}
										objectFit="cover"
										layout="responsive"
										className="rounded-xl"
									/>
									<h2 className="font-medium mb-1">Bedroom 1</h2>
									<p>1 Queen bed</p>
								</div>
							</div>
						</div>
					</div>
					<div className="py-8">
						<h1 className="font-medium mb-2 text-xl">Sleeping arrangements</h1>
						<div className="grid grid-cols-1 md:grid-cols-2 mb-6">
							<div className="flex items-center text-gray-700 mb-2">
								<AiOutlineCheck className="h-4 w-4 mr-4" />
								<h6>Iron</h6>
							</div>
							<div className="flex items-center text-gray-700 mb-2">
								<AiOutlineCheck className="h-4 w-4 mr-4" />
								<h6>Iron</h6>
							</div>
							<div className="flex items-center text-gray-700 mb-2">
								<AiOutlineCheck className="h-4 w-4 mr-4" />
								<h6>Iron</h6>
							</div>
							<div className="flex items-center text-gray-700 mb-2">
								<AiOutlineCheck className="h-4 w-4 mr-4" />
								<h6>Iron</h6>
							</div>
							<div className="flex items-center text-gray-700 mb-2">
								<AiOutlineCheck className="h-4 w-4 mr-4" />
								<h6>Iron</h6>
							</div>
						</div>
						<a
							href="#"
							className="border border-black rounded-md text-lg px-6 py-2 font-medium transition-all duration-200 bg-white hover:bg-gray-100"
						>
							Show all amenities
						</a>
					</div>
				</div>

				<div className="col-span-12 lg:col-span-4 rounded-2xl py-4 ">
					<div className="sticky top-28 ">
						<div className="shadow-xl px-4 py-5 rounded-2xl border ">
							<div className="mb-4">
								<span className="font-medium text-xl">$26</span>
								<span className="text-gray-400 mt-1">/ night</span>
							</div>
							<div className="rounded-2xl mb-4 grid grid-cols-2 grid-rows-2 border overflow-hidden">
								<div className="p-4 border-b border-r">
									<p className="text-xs font-medium mb-1">CHECK IN</p>
									<h1 className="text-gray-400">Add Date</h1>
								</div>
								<div className="p-4 border-b">
									<p className="text-xs font-medium mb-1">CHECK IN</p>
									<h1 className="text-gray-400">Add Date</h1>
								</div>
								<div className="p-4 col-span-2">
									<p className="text-xs font-medium mb-1">CHECK IN</p>
									<h1 className="text-gray-400">Add Date</h1>
								</div>
							</div>
							<button className="p-4 rounded-lg w-full font-medium text-center bg-gradient-to-r from-red-700 to-red-600 text-white">
								Check availability
							</button>
						</div>

						<div className="mt-6 text-center flex items-center justify-center">
							<BsFillFlagFill className="mr-2" />
							<span className="text-gray-400">Report this listing</span>
						</div>
					</div>
				</div>
			</div>
			<div className="py-8 border-b">
				<h1 className="text-xl font-medium mb-4 text-gray-900">
					No Reviews (yet)
				</h1>
				<p className="w-80">
					We’re here to help your trip go smoothly. Every reservation is covered
					by{" "}
					<a href="#" className="underline">
						Airbnb’s Guest Refund Policy
					</a>
					.
				</p>
			</div>
			<div className="py-8">
				<h1 className="text-xl font-medium mb-2 text-gray-900">Location</h1>
				<p className="mb-4">Jersey City, New Jersey, United States</p>

				<div className="mapouter">
					<div className="gmap_canvas">
						<iframe
							height="500"
							id="gmap_canvas"
							src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=k&z=7&ie=UTF8&iwloc=&output=embed"
							frameBorder="0"
							scrolling="no"
							marginHeight="0"
							marginWidth="0"
							className="w-full"
						></iframe>
						<a href="https://getasearch.com/fmovies"></a>
						<br />
						<style jsx>
							{`
								.mapouter {
									position: relative;
									text-align: right;
									height: 500px;
								}
							`}
						</style>
						<a href="https://www.embedgooglemap.net" className="underline">
							embed google maps on website
						</a>
						<style jsx>
							{`
								.gmap_canvas {
									overflow: hidden;
									background: none !important;
									height: 500px;
								}
							`}
						</style>
					</div>
				</div>
			</div>
		</div>
	);
};

export default detail;
