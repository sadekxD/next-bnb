import { useEffect, useState } from "react";
import { FaAirbnb } from "react-icons/fa";
import { AiOutlineGlobal, AiOutlineSearch } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuDropdown from "./MenuDropdown";

const Header = () => {
	const [activeHeader, setActiveHeader] = useState(false);
	const [formActive, setFormActive] = useState(false);

	useEffect(() => {
		const handleHeaderActive = () => {
			setFormActive(false);
			if (window.scrollY > 80) {
				setActiveHeader(true);
			} else {
				setActiveHeader(false);
			}
		};

		window.addEventListener("scroll", handleHeaderActive);
	}, []);

	return (
		<header className="header-container px-4 md:px-8 lg:px-12 fixed left-0 right-0 top-0 z-100 h-24 w-full flex items-center justify-between font-roboto">
			<div
				className={`bg-overlay transition-all duration-200 z-0 absolute top-0 right-0 left-0 bg-white transform-gpu ${
					activeHeader
						? "-translate-y-0 h-full shadow-xl"
						: "-translate-y-full h-0 shadow-none"
				}
                ${formActive ? "active" : ""}`}
			></div>
			<a
				href="#"
				className={`header-logo flex items-end ${
					activeHeader ? "text-red-400" : "text-white"
				}`}
			>
				<FaAirbnb className="text-4xl mr-2" />{" "}
				<span className="text-2xl font-semibold hidden lg:block">airbnb</span>
			</a>
			{/* <div
				onClick={() => setFormActive(!formActive)}
				className={`header-form-container transition-transform duration-200 absolute left-2/4 transform-gpu -translate-x-2/4 top-28 md:top-28 lg:top-20 font-sans flex flex-col items-center ${
					activeHeader
						? "text-gray-900 -translate-y-28"
						: "text-gray-50 lg:-translate-y-2/4"
				}
				${formActive ? "-translate-y-2/4" : "-translate-y-28"}
					`}
			>
				<div className={`form-links flex mb-4`}>
					<p className="link-1 active text-sm font-medium mx-6 py-2">
						Place To Stay
					</p>
					<p className="link-2 text-sm font-medium mx-6 py-2">Experiences</p>
					<p className="link-3 text-sm font-medium mx-6 py-2">
						Only Experiences
					</p>
				</div>
				<div className="header-form">
					<div
						className="form-1 absolute top-8 border h-16 rounded-full bg-white hidden"
						style={{ width: 853 }}
					>
						<div className="bar-1"></div>
						<div className="bar-2"></div>
						<div className="bar-3"></div>
						<div className="bar-4"></div>
					</div>
					<div className="form-2 w-72 h-12 flex items-center justify-between rounded-full border px-2">
						<p className="ml-2">Start your search</p>
						<span className="rounded-full p-2 bg-red-400 text-white">
							<AiOutlineSearch className="text-xl" />
						</span>
					</div>
				</div>
			</div>

			<div
				className={`flex items-center ${
					activeHeader ? "text-gray-900" : "text-white"
				}`}
			>
				<a
					href="#"
					className="rounded-full px-2 py-2 hover:bg-gray-50 hover:bg-opacity-50 font-medium text-sm mr-6"
				>
					Become a Host
				</a>
				<a
					href="#"
					className="rounded-full px-2 py-2 hover:bg-gray-50 hover:bg-opacity-50 text-xl mr-4"
				>
					<AiOutlineGlobal />
				</a>
				<MenuDropdown>
					<GiHamburgerMenu className="mr-3 text-xl" />
					<FaUser className="text-base" />
				</MenuDropdown>
			</div> */}
		</header>
	);
};

export default Header;
