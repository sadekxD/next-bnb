import footerLinks from "../data/footer.json";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="px-4 md:px-8 lg:px-12 py-4 bg-gray-100 border-t-2">
			<div className="footer-top grid lg:grid-cols-4 lg:divide-none divide-y divide-gray-200 grid-cols-1 border-b">
				{footerLinks.map(({ label, links }) => (
					<div key={label}>
						<h5 className="font-medium text-sm my-4">{label}</h5>
						<div className="grid lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-1">
							{links.map((l) => (
								<div key={l} className="pb-4 text-sm">
									<a href="#">{l}</a>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="footer-bottom pt-4 flex flex-col md:flex-row items-center justify-between font-medium">
				<ul className="text-sm flex">
					<a href="#" className="px-2">
						Privacy
					</a>
					<a href="#" className="px-2">
						Terms
					</a>
					<a href="#" className="px-2">
						Sitemap
					</a>
				</ul>
				<div className="flex items-center text-gray-900">
					<a href="#">
						<FaFacebookF className="px-2 h-7 w-7" />
					</a>
					<a href="#">
						<FaTwitter className="px-2 h-8 w-8" />
					</a>
					<a href="#">
						<FaInstagram className="px-2 h-8 w-8" />
					</a>
				</div>
				<div className="font-medium text-sm">
					© 2021 Airbnb, Inc. All rights reserved
				</div>
			</div>
		</footer>
	);
};

export default Footer;
