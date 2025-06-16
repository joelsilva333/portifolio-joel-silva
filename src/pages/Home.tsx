import Footer from "../components/Footer"
import Header from "../components/Header"
import AboutMe from "../containers/home/AboutMe"
import Banner from "../containers/home/Banner"
import Enterprises from "../containers/home/Enterprises"
import Projects from "../containers/home/Projects"

const Home: React.FC = () => {
	return (
		<main className="bg-[#0F172A] text-[#DEE5EF] h-screen overflow-y-auto font-Montserrat scrollbar-custom max-lg:gap-10 gap-24 flex flex-col relative">
			<Header />
			<Banner />
			<Projects />
			<AboutMe />
			<Enterprises />
			<Footer />
		</main>
	)
}

export default Home
