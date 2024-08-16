import React from "react"

const Banner: React.FC = () => {
	return (
		<section className="flex justify-center items-center sm:px-24 max-sm:px-10 py-12 h-80">
			<div className="flex flex-col items-center justify-center gap-7 p-2.5">
				<h1 className="font-bold text-3xl text-center max-lg:text-lg max-sm:text-base">
					Desenvolvedor Front-end, Backend & Designer
				</h1>
				<p className="w-2/3 max-sm:w-4/5 text-center max-sm:text-xs max-lg:text-sm">
					Crio experiências digitais envolventes, acessíveis e com atenção
					meticulosa aos detalhes.
				</p>
				<a
					href="/Curriculo_Joel_Silva.pdf"
					download="Joel_Germano_CV.pdf"
					className="lg:py-4 lg:px-5 max-lg:py-2 max-lg:px-4 rounded-full bg-[#DEE5EF] hover:border-2 hover:border-[#DEE5EF] transition-colors text-[#0F172A] hover:text-[#DEE5EF] hover:bg-transparent duration-700 h-12 max-lg:h-10 flex justify-center items-center max-lg:text-xs"
				>
					Baixar Curriculum Vitae
				</a>
			</div>
		</section>
	)
}

export default Banner
