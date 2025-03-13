import { assets } from "../assets/assets";

const About = () => {
	return (
		<div>
			<div className="text-center text-2xl pt-10 text-gray-500">
				<p>
					ABOUT <span className="text-gray-700 font-medium">US</span>
				</p>
			</div>

			<div className="my-10 flex flex-col md:flex-row gap-12">
				<img
					className="w-full md:max-w-[360px]"
					src={assets.about_image}
					alt="About-Us-Image"
				/>
				<div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
					<p>
						Welcome To DocTalk, Your Trusted Partner in Managing
						Your Healthcare Needs Conveniently And Efficiently. At
						DocTalk, We Understand The Challenges Individuals Face
						When it comes to Scheduling Doctor Appointments And
						Managing Their Health Records.
					</p>
					<p>
						DocTalk is Committed To Excellence in Healthcare
						Technology. We Continuously Strive To Enhance Our
						Platform. Integrating The Latest Advancements To improve
						User Experience And Deliver Superior Service. Whether
						You&apos;re Booking Your First Appointment Or Managing
						Ongoing Care, DocTalk is Here To Support You Every Step
						Of The Way.
					</p>
					<b className="text-gray-800">Our Vision</b>
					<p>
						Our Vision At DocTalk is To Create a seamless Healthcare
						Experience for every User. We aim to Bridge the Gap
						between Patients and Healthcare Providers, Making it
						easier for you to access the care you need, when you
						need it.
					</p>
				</div>
			</div>

			<div className="text-xl my-4">
				<p>
					WHY{" "}
					<span className="text-gray-700 font-semibold">
						CHOOSE US
					</span>
				</p>
			</div>

			<div className="flex flex-col md:flex-row mb-20">
				<div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
					<b>EFFICIENCY:</b>
					<p>
						Streamlined Appointment Scheduling That Fits Into Your
						Busy Lifestyle.
					</p>
				</div>
				<div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
					<b>CONVENIENCE:</b>
					<p>
						Access To A Network Of Trusted Healthcare Professionals
						In Your Area.
					</p>
				</div>
				<div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
					<b>PERSONALIZATION:</b>
					<p>
						Tailored Recommendations And Reminders To Help You Stay
						On Top of Your Health.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
