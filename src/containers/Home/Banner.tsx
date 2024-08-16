import React from "react"

const Banner: React.FC = () => {
	return (
		<section className="flex justify-center items-center sm:px-24 max-sm:px-10 py-12 h-80">
			<div className="flex flex-col items-center justify-center gap-7 p-2.5">
				<h1 className="font-bold sm:text-3xl text-center">
					Desenvolvedor Front-end, Backend & Designer
				</h1>
				<p className="w-2/3 text-center max-sm:text-xs">
					Crio experiências digitais envolventes, acessíveis e com atenção
					meticulosa aos detalhes.
				</p>
				<a
					href="/public/Currículo_Joel_Silva.pdf"
					download="Joel_Germano_CV.pdf"
					className="lg:py-4 lg:px-5 max-lg:py-2 max-lg:px-4 rounded-full bg-[#DEE5EF] hover:border-2 hover:border-[#DEE5EF] transition-colors text-[#0F172A] hover:text-[#DEE5EF] hover:bg-transparent duration-700 h-12 flex justify-center items-center max-lg:text-xs"
				>
					Baixar Curriculum Vitae
				</a>
			</div>
		</section>
	)
}

export default Banner
