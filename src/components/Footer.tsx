import { useState } from "react"
import { logo } from "../assets"
import { emailIcon, instagramIcon, linkedinIcon } from "../assets/icons/footer"
import ContactMeModal from "./home/ContactMe/Modal"

const Footer: React.FC = () => {
	const [contactMeOpen, setContactMeOpen] = useState(false)

	return (
		<footer className="bg-[#1D2B50]  flex flex-col items-center justify-end lg:px-12 pb-12 gap-6 text-center relative">
			<nav className="w-full flex lg:rounded-3xl bg-[#223975] lg:px-16 max-lg:px-10 max-lg:py-7 items-center justify-between h-36 max-lg:flex-col">
				<p className="font-bold max-lg:hidden">Começar um projecto.</p>
				<p className="text-sm max-lg:text-xs">
					Interessado em trabalhar juntos? Devíamos fazer fila para conversar.
					Eu compro o café.
				</p>

				<button
					onClick={() => setContactMeOpen(true)}
					className="px-4 max-lg:text-xs py-2.5 border-2 rounded-full border-[#DEE5EF] hover:bg-[#DEE5EF] text-sm transition-colors hover:text-[#0F172A] duration-700"
				>
					Contactar
				</button>
			</nav>

			<div className="flex flex-col gap-4 items-center px-12">
				<img src={logo} alt="" className="w-10"/>

				<p className="font-Inconsolata max-lg:text-sm">
					“A gratidão me fez encontrar a beleza na paciência”
				</p>

				<div className="flex gap-4 justify-center items-center p-5 max-lg:text-sm">
					<a href="https://www.instagram.com/joel_germany_/" target="_blank">
						<img src={instagramIcon} alt="" className="hover:invert" />
					</a>

					<a
						href="https://www.linkedin.com/in/joel-g-da-silva/"
						target="_blank"
					>
						<img src={linkedinIcon} alt="" className="hover:invert" />
					</a>
					<a href="mailto:joelpitra44@gmail.com">
						<img src={emailIcon} alt="" className="hover:invert" />
					</a>
				</div>

				<div className="max-lg:text-sm">
					<p>Handcrafted by Joel in 2024 ©</p>
					<p>Made with React.</p>
				</div>
			</div>

			{contactMeOpen && (
				<ContactMeModal onClose={() => setContactMeOpen(false)} />
			)}
		</footer>
	)
}

export default Footer
