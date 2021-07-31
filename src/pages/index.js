import Footer from "../components/Footer";
import SEO from "../seo/SEO";
import Header from "../components/Header";
import HeroSection from "../components/sections/HeroSection";
import LocationSection from "../components/sections/LocationSection";
import AnywhereSection from "../components/sections/AnywhereSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HostSection from "../components/sections/HostSection";
import TabsSections from "../components/sections/TabsSections";

export default function Home() {
	return (
		<div className="">
			<SEO />
			<Header />
			<HeroSection />
			<LocationSection />
			<AnywhereSection />
			<ExperienceSection />
			<HostSection />
			<TabsSections />
			<Footer />
		</div>
	);
}
