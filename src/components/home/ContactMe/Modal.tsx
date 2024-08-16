import { useRef, useEffect, useState, FC } from "react"
import { contactMeBg } from "../../../assets/home/ContactMe"
import { IoMdArrowBack } from "react-icons/io"

interface ContactMeModalProps {
	onClose: () => void
}

const ContactMeModal: FC<ContactMeModalProps> = ({ onClose }) => {
	const modalRef = useRef<HTMLDivElement>(null)
	const [isClosing, setIsClosing] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		// Ativa a animação de abertura
		setIsOpen(true)
	}, [])

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				setIsClosing(true)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)

		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	useEffect(() => {
		if (isClosing) {
			const timer = setTimeout(() => {
				onClose()
			}, 300) // 300ms para coincidir com a duração da animação

			return () => clearTimeout(timer)
		}
	}, [isClosing, onClose])

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
				isOpen ? "opacity-100" : "opacity-0"
			} ${isClosing ? "opacity-0" : ""}`}
		>
			<div
				ref={modalRef}
				className={`w-4/5 max-sm:w-full max-sm:h-full max-sm:rounded-none h-[85lvh] flex bg-blueSecondary rounded-3xl transform transition-transform duration-500 ${
					isOpen ? "scale-100" : "scale-90"
				} ${isClosing ? "scale-0" : ""}`}
			>
				<img
					src={contactMeBg}
					alt=""
					className="w-1/2 h-full object-cover max-lg:hidden"
				/>

				<form className="w-1/2 max-lg:w-full flex flex-col gap-10 px-10 py-10 justify-center">
					<div className="flex flex-col gap-4">
						<h1 className="text-2xl font-semibold max-lg:text-lg max-sm:flex text-center">
							<button
								className="text-sm hidden max-sm:block"
								type="button"
								onClick={() => setIsClosing(true)}
							>
								<IoMdArrowBack className="text-xl" />
							</button>{" "}
							<span className="w-full text-center">Começar um projecto</span>
						</h1>
						<p className="text-center">
							Insira suas informações e mande sua sugestão.
						</p>
					</div>

					<div className="flex flex-col w-full items-center gap-5">
						<div className="flex flex-col w-full items-start gap-2">
							<label htmlFor="">Nome</label>
							<input
								type="text"
								name=""
								id=""
								className="h-8 w-full rounded-md outline-none py-2 px-4 text-gray-500"
								placeholder="Insira o seu nome aqui..."
							/>
						</div>

						<div className="flex flex-col w-full items-start gap-2">
							<label htmlFor="">Email</label>
							<input
								type="email"
								name=""
								id=""
								className="h-8 w-full rounded-md outline-none py-2 px-4 text-gray-500"
								placeholder="Insira o seu nome aqui..."
							/>
						</div>

						<div className="flex flex-col w-full items-start gap-2">
							<label htmlFor="">Mensagem</label>
							<textarea
								name=""
								id=""
								className="w-full rounded-md outline-none py-2 px-4 text-gray-500 resize-none"
								cols={20}
								rows={4}
								placeholder="Deixe aqui a sua mensagem..."
							/>
						</div>

						<button
							type="submit"
							className="py-2 px-4 flex items-center justify-center w-full border rounded-full border-[#DEE5EF] hover:bg-[#DEE5EF] hover:text-blueSecondary transition-colors duration-300"
						>
							Enviar mensagem
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ContactMeModal
