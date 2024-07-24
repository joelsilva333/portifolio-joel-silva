import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules"
import { useState } from "react"
import { arrowRight, elipseBlurRight} from "../../assets"

const Projects: React.FC = () => {
	const [openAboutIndex, setOpenAboutIndex] = useState<number | null>(null)

	const projectsInfo = [
		{
			title: "Albooni",
			slogan: "Guarde aqui todos seus momentos!",
			creators: "Fundado e desenvolvido por mim.",
			aboutProj: `Uma plataforma para guardar suas fotos, eventos ou outras
						atividades em formato de albuns e vê-los em qualquer lugar!`,
			website: "",
		},
		{
			title: "Only Here",
			slogan: "Nunca mais se sinta sozinho!",
			creators: "Fundado e desenvolvido por mim.",
			aboutProj: `Uma plataforma de conversas anónimas, sem a necessidade de
						criar um perfil, totalmente gratuita.`,
			website: "",
		},
	]

	return (
		<section className="flex flex-col p-12 gap-6 justify-center items-center h-[670px] relative" id="projects">
			<h2 className="text-2xl">Meus projectos e trabalhos recentes</h2>

			<div className="h-[460px] w-3/4">
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
					pagination={false}
					modules={[EffectCoverflow, Pagination]}
					className="mySwiper"
				>
					{projectsInfo.map((proj, index) => (
						<SwiperSlide key={index}>
							<div className="w-full h-full rounded-[50px] flex flex-col justify-center items-center text-center gap-4 bg-whiteDefault text-blueDefault relative">
								<h1 className="font-bold text-4xl">{proj.title}</h1>

								<p className="text-lg text-blueDefault ">{proj.slogan}</p>

								<button
									onClick={() => setOpenAboutIndex(index)}
									className="px-4 py-2.5 rounded-full bg-blueDefault text-whiteDefault hover:bg-whiteDefault hover:text-blueDefault hover:border-[#223a75] border-2 transition-colors duration-300"
								>
									Saber mais
								</button>

								<div
									className={`w-full h-full rounded-[50px] flex flex-col justify-center gap-5 items-center absolute top-0 left-0 bg-[#223a75] transition-opacity duration-300 ease-in-out ${
										openAboutIndex === index
											? "opacity-100"
											: "opacity-0 pointer-events-none"
									}`}
								>
									<p className="text-whiteDefault">{proj.creators}</p>

									<p className="text-lg w-2/3 text-whiteDefault ">
										{proj.aboutProj}
									</p>

									<p className="text-lg text-whiteDefault ">
										Disponível brevemente.
									</p>

									<a
										href={proj.website}
										className="w-44 group px-4 py-2.5 border-2 rounded-full border-[#DEE5EF] text-whiteDefault flex items-center  hover:bg-whiteDefault transition-colors duration-300"
									>
										<span className="w-full group-hover:invert">
											Ver website
										</span>{" "}
										<span>
											<img
												src={arrowRight}
												alt=""
												className="group-hover:invert"
											/>
										</span>
									</a>

									<button
										onClick={() => setOpenAboutIndex(null)}
										className="px-4 py-2.5 rounded-full bg-whiteDefault text-black  hover:text-whiteDefault hover:bg-blueDefault hover:border hover:border-[#dee5ef] h-11 flex items-center"
									>
										Fechar
									</button>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<img
				src={elipseBlurRight}
				alt=""
				className="absolute right-0 bottom-0 animate-pulse"
			/>
			</div>
		</section>
	)
}

export default Projects
