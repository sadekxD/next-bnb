import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const MenuDropdown = ({ children }) => {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className=" rounded-full px-4 py-2 bg-white text-gray-500 border shadow-lg flex items-center">
					{children}
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer shadow-2xl">
					<div className="px-1 py-1 hover:bg-gray-400 hover:bg-opacity-25">
						<Menu.Item>
							<a className="text-gray-900 group flex rounded-md items-center w-full px-4 py-2 text-sm ">
								Sign up
							</a>
						</Menu.Item>
					</div>
					<div className="px-1 py-1 border-b hover:bg-gray-400 hover:bg-opacity-25">
						<Menu.Item>
							<a className="text-gray-900 group flex rounded-md items-center w-full px-4 py-2 text-sm">
								Login
							</a>
						</Menu.Item>
					</div>
					<div className="px-1 py-1 hover:bg-gray-400 hover:bg-opacity-25">
						<Menu.Item>
							<a className="text-gray-900 group flex rounded-md items-center w-full px-4 py-2 text-sm">
								Host Your Home
							</a>
						</Menu.Item>
					</div>
					<div className="px-1 py-1 hover:bg-gray-400 hover:bg-opacity-25">
						<Menu.Item>
							<a className="text-gray-900 group flex rounded-md items-center w-full px-4 py-2 text-sm">
								Host your Experience
							</a>
						</Menu.Item>
					</div>
					<div className="px-1 py-1 hover:bg-gray-400 hover:bg-opacity-25">
						<Menu.Item>
							<a className="text-gray-900 group flex rounded-md items-center w-full px-4 py-2 text-sm">
								Help
							</a>
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default MenuDropdown;
