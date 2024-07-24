import { Link } from "react-router-dom"
import { logo } from "../assets"
import { emailIcon, instagramIcon, linkedinIcon } from "../assets/icons/footer"

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#1D2B50] h-[400px] flex flex-col items-center justify-end p-12 gap-6 text-center relative">
			<nav className="w-4/5 flex rounded-3xl bg-[#223975] px-16 py-6 items-center justify-between h-36">
				<p className="font-bold">Começar um projecto.</p>
				<p className="text-sm">
					Interessado em trabalhar juntos? Devíamos fazer fila para conversar.
					Eu compro o café.
				</p>
				<Link
					to="#"
					className="px-4 py-2.5 border-2 rounded-full border-[#DEE5EF] hover:bg-[#DEE5EF] text-sm transition-colors hover:text-[#0F172A] duration-700"
				>
					Contactar
				</Link>
			</nav>

			<img src={logo} alt="" />

			<p className="font-Inconsolata">
				“A gratidão me fez encontrar a beleza na paciência”
			</p>

			<div className="flex gap-4 justify-center items-center p-5">
				<a href="https://www.instagram.com/joel_germany_/" target="_blank">
					<img src={instagramIcon} alt="" className="hover:invert" />
				</a>

				<a href="https://www.linkedin.com/in/joel-g-da-silva/" target="_blank">
					<img src={linkedinIcon} alt="" className="hover:invert" />
				</a>
				<a href="mailto:joelpitra44@gmail.com">
					<img src={emailIcon} alt="" className="hover:invert" />
				</a>
			</div>

			<div>
				<p>Handcrafted by Joel in 2024 ©</p>
				<p>Made with React.</p>
			</div>
		</footer>
	)
}

export default Footer
