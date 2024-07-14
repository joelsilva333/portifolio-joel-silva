import AboutMe from "../containers/Home/AboutMe"
import Banner from "../containers/Home/Banner"
import Header from "../containers/Home/Header"
import Projects from "../containers/Home/Projects"

const Home: React.FC = () => {
	return (
		<main className="bg-[#0F172A] text-[#DEE5EF] h-screen overflow-y-auto font-Montserrat scrollbar-custom">
			<Header />
			<Banner />
			<AboutMe />
			<Projects />
		</main>
	)
}

export default Home
