import Image from "next/image";

const HeroSection = () => {
	return (
		<section className="hero-section flex items-end md:items-center relative overflow-hidden">
			<div className="absolute top-0 left-0 right-0 bottom-0">
				<Image
					src={require("../../media/hero-image.jpg")}
					objectFit="cover"
					layout="fill"
					className="hero-img w-full h-full"
				/>
			</div>
			<div className="w-full px-4 md:px-8 lg:px-12 py-8 mx-auto z-10">
				<div className="hero-text font-extrabold text-5xl md:text-7xl lg:text-9xl text-white">
					<h1>Go</h1>
					<h1>Near</h1>
				</div>
				<button className="font-medium text-base rounded px-4 py-1 bg-white mt-5 lg:ml-2">
					Explore nearby stays
				</button>
			</div>
		</section>
	);
};

export default HeroSection;
