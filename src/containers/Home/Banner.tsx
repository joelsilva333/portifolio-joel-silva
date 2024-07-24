import React from "react"

const Banner: React.FC = () => {
	return (
		<section className="flex justify-center items-center px-24 py-12 h-80 z-40">
			<div className="flex flex-col items-center justify-center gap-7 p-2.5">
				<h1 className="font-bold text-3xl text-center">
					Desenvolvedor Front-end, Backend & Designer
				</h1>
				<p className="w-2/3 text-center">
					Crio experiências digitais envolventes, acessíveis e com atenção
					meticulosa aos detalhes.
				</p>
				<a
					href="../../../public/Currículo_Joel_Silva.pdf"
					download="Joel_Germano_CV.pdf"
					className="py-4 px-5 rounded-full bg-[#DEE5EF] hover:border-2 hover:border-[#DEE5EF] transition-colors text-[#0F172A] hover:text-[#DEE5EF] hover:bg-transparent duration-700 h-12 flex justify-center items-center"
				>
					Baixar Curriculum Vitae
				</a>
			</div>
		</section>
	)
}

export default Banner
