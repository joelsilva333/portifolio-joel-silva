import { logo } from "../assets"
import { useState } from "react"
import ContactMeModal from "./home/ContactMe/Modal"
import { menuIcon } from "../assets/icons"

const Header: React.FC = () => {
	const scrollToProjects = (e: React.MouseEvent) => {
		e.preventDefault()
		const projectsSection = document.getElementById("projects")
		if (projectsSection) {
			projectsSection.scrollIntoView({ behavior: "smooth" })
		}
	}

	const [contactMeOpen, setContactMeOpen] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<main className="flex justify-between items-center lg:px-12 max-lg:px-8 lg:py-2.5 max-lg:py-4 h-24 z-40">
			<img src={logo} alt="" className="max-lg:w-7" />{" "}
			<button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
				<img src={menuIcon} alt="Menu Icon" />
			</button>
			<div className="flex gap-5 items-center max-sm:hidden">
				<a
					href="/"
					onClick={scrollToProjects}
					className="h-5 flex items-center justify-center hover:border-b-2 hover:border-[#DEE5EF] max-lg:text-sm"
				>
					Projectos
				</a>
				<button
					onClick={() => setContactMeOpen(true)}
					className="px-4 py-2.5 border-2 rounded-full border-[#DEE5EF] hover:bg-[#DEE5EF] transition-colors hover:text-[#0F172A] duration-700 flex items-center justify-center text-center max-lg:text-xs"
				>
					Entrar em contacto
				</button>
			</div>
			{/* Menu Dropdown for small screens */}
			{menuOpen && (
				<div className="absolute top-[8%] right-8 bg-whiteDefault shadow-lg flex flex-col sm:hidden rounded-lg">
					<a
						href="/"
						onClick={scrollToProjects}
						className="text-[#0F172A] hover:bg-[#0f172ab3] hover:text-whiteDefault text-xs transition-colors duration-300 px-4 py-2"
					>
						Projectos
					</a>
					<button
						onClick={() => {
							setContactMeOpen(true)
							setMenuOpen(false)
						}}
						className="text-[#0F172A] hover:bg-[#0f172ab3] hover:text-whiteDefault text-xs transition-colors duration-300 px-4 py-2"
					>
						Entrar em contacto
					</button>
				</div>
			)}
			{contactMeOpen && (
				<ContactMeModal onClose={() => setContactMeOpen(false)} />
			)}
		</main>
	)
}

export default Header
