import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules"
import { useState } from "react"
import { arrowRight } from "../../assets"
import {
	albooni,
	globalSc,
	mariaBorges,
	mesaRedonda,
	myPicture,
	onlyHere,
	unocura,
} from "../../assets/home/Projects"

const Projects: React.FC = () => {
	const [openAboutIndex, setOpenAboutIndex] = useState<number | null>(null)

	const projectsInfo = [
		{
			title: "Portifólio - Joel da Silva",
			slogan: "Desenvolvido para mostrar meus trabalhos.",
			creators: "Fundado, desenhado e desenvolvido por mim.",
			aboutProj: `Projecto totalmente criado por mim, com base no meu aprendizado e ensinamentos, usando o Figma para o design de interface, React.js como framework para desenvolvimento das interfaces, usando Typescript como linguagem de programação.`,
			design:
				"https://www.figma.com/design/AwfC1rdBHZ3qEHFPoKZCry/Portif%C3%B3lio-Joel?node-id=202-700&t=qY8CeNzR5P6I5L3f-0",
			website: "",
			bgImg: myPicture,
		},
		{
			title: "Global Services Corporation",
			slogan: "Desenvolvido para a empresa mediadora de seguros e multisserviços.",
			creators:
				"Fundado por Edson Katchievela, design Etelvino Sapomdia e desenvolvido por mim.",
			aboutProj: `Global Services Corporation, empresa angolana de multisserviços, com sede na Rua Dr. Aleixo de Abreu, Ingombotas, Luanda, Angola.`,
			design: "",
			website: "https://globalsc.ao",
			bgImg: globalSc,
		},
		{
			title: "Mesa Redonda com os CEO's",
			slogan:
				"Um evento corporativo realizado pela Global Services Corporation.",
			creators:
				"Fundado por Edson Katchievela, design Etelvino Sapomdia e desenvolvido por mim.",
			aboutProj: `A 4ª Edição da Mesa Redonda com CEOs é um evento que reunirá líderes da economia angolana e internacional para discutir o impacto da inovação nas cadeias de produção e como essa inovação pode ajudar os líderes a se posicionarem diante dos desafios dos seus mercados.`,
			design: "",
			website: "https://mesaredonda.globalsc.ao",
			bgImg: mesaRedonda,
		},
		{
			title: "UNOCURA",
			slogan: "Uma plataforma de telemedicina e outros serviços de saúde.",
			creators:
				"Fundado por Antonio Contreiras, design Clénio Muty e Ednilson Araújo, desenvolvido por mim e outros colaboradores",
			aboutProj: `Unocura é uma solução digital que permite que profissionais de saúde realizem consultas médicas e forneçam outros serviços relacionados à saúde de forma remota, utilizando tecnologia como videochamadas, chat, e outras ferramentas de comunicação. `,
			design: "",
			website: "http://unocura.ao",
			bgImg: unocura,
		},
		{
			title: "Website - Maria Borges",
			slogan: "Desenvolvido para a modelo angolana Maria Borges.",
			creators:
				"Fundado por Antonio Contreiras, design Ednilson Araújo, desenvolvido por mim.",
			aboutProj: `Maria Borges é uma modelo angolana conhecida por seu trabalho internacional na indústria da moda. Ela ganhou notoriedade ao ser a primeira modelo africana a desfilar para a Victoria's Secret com o cabelo natural, em 2015.`,
			design: "",
			website: "",
			bgImg: mariaBorges,
		},
		{
			title: "Albooni",
			slogan: "Guarde aqui todos seus momentos!",
			creators: "Fundado e desenvolvido por mim.",
			aboutProj: `Uma plataforma para guardar suas fotos, eventos ou outras
						atividades em formato de albuns e vê-los em qualquer lugar!`,
			design: "",
			website: "",
			bgImg: albooni,
		},
		{
			title: "Only Here",
			slogan: "Nunca mais se sinta sozinho!",
			creators: "Fundado e desenvolvido por mim.",
			aboutProj: `Uma plataforma de conversas anónimas, sem a necessidade de
						criar um perfil, totalmente gratuita.`,
			design: "",
			website: "",
			bgImg: onlyHere,
		},
	]

	return (
		<section
			className="bg-[#223975] flex flex-col lg:px-12 lg:py-14 max-lg:px-10 max-lg:py-14 gap-6 max-lg:gap-4 justify-center items-center h-[670px] relative sm:rounded-[50px]"
			id="projects"
		>
			<h2 className="text-2xl text-center max-lg:text-lg max-sm:text-base">
				Meus projectos e trabalhos recentes
			</h2>

			<div className="sm:h-[480px] w-3/4 max-lg:w-4/5 max-sm:w-full max-sm:h-[350px]">
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={"auto"}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: true,
					}}
					pagination={true}
					modules={[EffectCoverflow, Pagination, Autoplay]}
					className="mySwiper h-full"
				>
					{projectsInfo.map((proj, index) => (
						<SwiperSlide key={index} className="">
							<div className="w-full h-full rounded-[50px] flex flex-col justify-center items-center text-center gap-4 bg-whiteDefault text-blueDefault relative">
								<div className=" w-full h-full relative rounded-[50px]">
									<div className="absolute top-0 left-0 w-full h-full bg-[#223a75]  rounded-[50px]"></div>

									<img
										src={proj.bgImg}
										alt=""
										className="object-cover w-full h-full rounded-[50px] opacity-25"
									/>
								</div>

								<div className="absolute inset-x-0 flex flex-col justify-center items-center text-center gap-4 text-whiteDefault max-lg:w-3/4 mx-auto w-4/5">
									<h1 className="font-bold text-3xl max-lg:text-2xl max-sm:text-base">
										{proj.title}
									</h1>

									<p className="text-base max-lg:text-sm max-sm:text-xs">
										{proj.slogan}
									</p>

									<button
										onClick={() => setOpenAboutIndex(index)}
										className="lg:px-4 lg:py-2.5 max-lg:px-3 max-lg:py-1 max-sm:text-xs  rounded-full hover:bg-blueDefault hover:text-whiteDefault bg-whiteDefault text-blueDefault hover:border-[#223a75] border-2 transition-colors duration-300"
									>
										Saber mais
									</button>
								</div>

								<div
									className={`w-full h-full rounded-[50px] flex flex-col justify-center gap-5 max-lg:gap-3 items-center absolute top-0 left-0 bg-[#2a55c2] transition-opacity duration-300 ease-in-out ${
										openAboutIndex === index
											? "opacity-100"
											: "opacity-0 pointer-events-none"
									}`}
								>
									<p className="text-whiteDefault text-sm max-sm:text-xs w-11/12">
										{proj.creators}
									</p>

									<p className=" w-4/5 text-whiteDefault text-sm max-sm:hidden">
										{proj.aboutProj}
									</p>

									{!proj.website && !proj.design ? (
										<p className="text-lg text-whiteDefault max-lg:text-xs">
											Disponível brevemente.
										</p>
									) : (
										<div className="flex gap-2 max-lg:flex-col">
											{proj.design && (
												<a
													href={proj.design}
													target="_blank"
													className="w-44 max-sm:w-32 group lg:px-4 lg:py-2.5 max-lg:px-3 max-lg:py-1 max-lg:text-xs border-2 rounded-full border-[#DEE5EF] text-whiteDefault flex items-center hover:bg-whiteDefault transition-colors duration-300"
												>
													<span className="w-full group-hover:invert max-lg:text-xs">
														Ver design
													</span>
													<span>
														<img
															src={arrowRight}
															alt=""
															className="group-hover:invert"
														/>
													</span>
												</a>
											)}
											{proj.website && (
												<a
													href={proj.website}
													target="_blank"
													className="w-44 max-sm:w-32 group lg:px-4 lg:py-2.5 max-lg:px-3 max-lg:py-1 max-lg:text-xs border-2 rounded-full border-[#DEE5EF] text-whiteDefault flex items-center hover:bg-whiteDefault transition-colors duration-300"
												>
													<span className="w-full group-hover:invert max-lg:text-xs">
														Ver website
													</span>
													<span>
														<img
															src={arrowRight}
															alt=""
															className="group-hover:invert"
														/>
													</span>
												</a>
											)}
										</div>
									)}

									<button
										onClick={() => setOpenAboutIndex(null)}
										className="lg:px-4 lg:py-2.5 max-lg:px-4 max-lg:py-2 max-lg:text-xs rounded-full bg-whiteDefault text-black  hover:text-whiteDefault hover:bg-blueDefault flex items-center transition-colors duration-300"
									>
										Fechar
									</button>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Projects
