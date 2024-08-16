import { logo } from "../assets"
import { useState } from "react"
import ContactMeModal from "./home/ContactMe/Modal"

const Header: React.FC = () => {
	const scrollToProjects = (e: React.MouseEvent) => {
		e.preventDefault()
		const projectsSection = document.getElementById("projects")
		if (projectsSection) {
			projectsSection.scrollIntoView({ behavior: "smooth" })
		}
	}

	const [contactMeOpen, setContactMeOpen] = useState(false)

	return (
		<main className="flex justify-between items-center px-12 py-2.5 h-24 z-40">
			<img src={logo} alt="" />{" "}
			<div className="flex gap-5 items-center">
				<a
					href="/"
					onClick={scrollToProjects}
					className="h-5 flex items-center justify-center hover:border-b-2 hover:border-[#DEE5EF]"
				>
					Projectos
				</a>
				<button
					onClick={() => setContactMeOpen(true)}
					className="px-4 py-2.5 border-2 rounded-full border-[#DEE5EF] hover:bg-[#DEE5EF] transition-colors hover:text-[#0F172A] duration-700 flex items-center justify-center text-center"
				>
					Entrar em contacto
				</button>
			</div>
			{contactMeOpen && (
				<ContactMeModal onClose={() => setContactMeOpen(false)} />
			)}
		</main>
	)
}

export default Header
