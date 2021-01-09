import styles from "../styles/Home.module.scss";
import NavBar from "../components/navbar/Navbar";
import MainJumbotron from "../components/jumbotron/MainJumbotron";
import CompanyStories from "../components/companyStories/CompanyStories";
import Options from "../components/options/Options";
import Fetaures from "../components/features/Features";
import CloudSection from "../components/Cloud Section/CloudSection";
import LegacySection from "../components/legacy section/LegacySection";
import Events from "../components/events/Events";
import Footer from "../components/footer/Footer";

export default function Home() {
	return (
		<>
			<NavBar />
			<div className={styles.container}>
				<MainJumbotron />
				<CompanyStories />
				<Options />
				<Fetaures />
				<CloudSection />
				<LegacySection />
				<Events />
				<Footer />
			</div>
		</>
	);
}
