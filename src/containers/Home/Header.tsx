import { Link } from "react-router-dom"
import { logo } from "../../assets"

const Header: React.FC = () => {
	return (
		<main className="flex justify-between items-center px-12 py-2.5 h-24">
			<img src={logo} alt="" />{" "}
			<div className="flex gap-5 items-center">
				<a
					href="/"
					className="h-5 flex items-center justify-center hover:border-b-2 hover:border-[#DEE5EF]"
				>
					Projectos
				</a>
				<Link
					to="#"
					className="px-4 py-2.5 border-2 rounded-full border-[#DEE5EF] hover:bg-[#DEE5EF] transition-colors hover:text-[#0F172A] duration-700"
				>
					Entrar em contacto
				</Link>
			</div>
		</main>
	)
}

export default Header
