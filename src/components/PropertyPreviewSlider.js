// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

import Image from "next/image";

const PropertyPreviewSlider = () => {
	return (
		<div className="md:hidden rounded-2xl overflow-hidden">
			<Swiper
				spaceBetween={0}
				slidesPerView={1}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>
					<Image
						src={require("../media/location_img/road.jpg")}
						objectFit="cover"
						layout="responsive"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={require("../media/location_img/road.jpg")}
						objectFit="cover"
						layout="responsive"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={require("../media/location_img/road.jpg")}
						objectFit="cover"
						layout="responsive"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={require("../media/location_img/road.jpg")}
						objectFit="cover"
						layout="responsive"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default PropertyPreviewSlider;
