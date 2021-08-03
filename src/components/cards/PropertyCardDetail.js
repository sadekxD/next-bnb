import { AiOutlineHome } from "react-icons/ai";

const PropertyCardDetail = () => {
	return (
		<div className="flex text-gray-900 mb-4">
			<div className="p-1">
				<AiOutlineHome className="h-6 w-6" />
			</div>
			<div className="ml-4">
				<h1 className="font-medium">Entire home</h1>
				<p className="text-sm">You’ll have the apartment to yourself.</p>
			</div>
		</div>
	);
};

export default PropertyCardDetail;
