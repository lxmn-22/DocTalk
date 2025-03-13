import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<div className="md:mx-10">
			<div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
				{/* Left Side */}
				<div>
					<NavLink
						to="/"
						className="w-44 text-4xl font-semibold text-primary cursor-pointer"
					>
						DocTalk
					</NavLink>
					<p className="w-full md:w-2/3 text-gray-600 leading-6 text-justify">
						<span className="font-semibold">
							Your Trusted Healthcare Partner – Easy Appointments,
							Expert Care
						</span>{" "}
						<br /> Welcome to DocTalk, your one-stop platform for
						hassle-free doctor appointments and quality healthcare
						services. We connect you with experienced doctors across
						various specialties, ensuring you receive the best
						medical care when you need it.
					</p>
				</div>

				{/* Middle side */}
				<div>
					<p className="text-xl font-medium mb-5">COMPANY</p>
					<ul className="flex flex-col gap-2 text-gray-600">
						<li>Home</li>
						<li>About us</li>
						<li>Contact us</li>
						<li>Privacy policy</li>
					</ul>
				</div>

				{/* Right side */}
				<div>
					<p className="text-xl font-medium mb-5">GET IN TOUCH</p>
					<ul className="flex flex-col gap-2 text-gray-600">
						<li>+91 9411100033</li>
						<li>doctalk@gmail.com</li>
					</ul>
				</div>
			</div>
			{/* Copyright Text */}
			<div>
				<hr />
				<p className="py-5 text-sm text-center">
					Copyright 2025 @DocTalk - All Right Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
