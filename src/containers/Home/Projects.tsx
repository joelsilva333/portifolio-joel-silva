import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { useState } from "react";
import { arrowRight } from "../../assets";
import {
  mobo,
  globalSc,
  mesaRedonda,
  myPicture,
  kuvica,
  kilazer,
} from "../../assets/home/Projects";

const Projects: React.FC = () => {
  const [openAboutIndex, setOpenAboutIndex] = useState<number | null>(null);

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
      slogan:
        "Desenvolvido para a empresa mediadora de seguros e multisserviços.",
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
        "Fundado por Edson Katchievela, web design feito por e desenvolvido por mim.",
      aboutProj: `A Mesa Redonda com CEOs é um evento que reune líderes das empresas angolanas e internacionais para discutir vários temas nas cadeias de produção e como a inovação pode ajudar os líderes a se posicionarem diante dos desafios dos seus mercados.`,
      design: "",
      website: "https://mesaredonda.globalsc.ao",
      bgImg: mesaRedonda,
    },
    {
      title: "MOBO GO",
      slogan: "Carteira Digital para Pagamento de Táxi em Angola",
      creators: "Fundado e desenvolvido por mim.",
      aboutProj: `MOBO GO é uma aplicação móvel desenvolvida para revolucionar a forma como os angolanos pagam pelo transporte público informal, com foco nos tradicionais táxis azuis e brancos. A plataforma permite que os passageiros comprem bilhetes digitais e os validem por meio de um QR Code, garantindo uma experiência mais prática, segura e moderna.`,
      design:
        "https://www.figma.com/design/1a6tH3uh3jPd9C4cf4fioj/MOBO-GO?node-id=213-535&p=f&t=3AUebV82e80Ck7BO-0",
      website: "",
      bgImg: mobo,
    },
    {
      title: "Kuvica",
      slogan: "Ligamos clientes a profissionais de confiança!",
      creators: "Fundado e sendo desenvolvido por mim.",
      aboutProj: `KUVICA é uma plataforma digital angolana que conecta clientes a profissionais de serviços variados, promovendo o acesso rápido, seguro e transparente à mão de obra qualificada e informal. De eletricistas e canalizadores a fotógrafos, costureiras e DJs — a KUVICA é o marketplace onde o talento local encontra a demanda real.`,
      design:
        "https://www.figma.com/design/0H06NO6en3uRi6UUl0nIFW/Kuvica---Marketplace-de-Multiservi%C3%A7os?node-id=89-11329&p=f&t=W81CgYK6BUecQ0Op-0",
      website: "https://kuvica.vercel.app",
      bgImg: kuvica,
    },
    {
      title: "KILAZER",
      slogan: "Encontre o lazer todo sem precisar de nada!",
      creators: "Web design feito por mim!",
      aboutProj: `Kilazer é uma plataforma digital que te ajuda a descobrir zonas de lazer e alugar espaços para eventos ou momentos de descanso, tudo num só lugar. Seja para uma festa, piquenique, reunião ou apenas relaxar, a Kilazer conecta-te aos melhores espaços disponíveis perto de ti.`,
      design:
        "https://www.figma.com/design/ISbLGq3yYbGQpgGo12nJux/KILAZER?node-id=243-1129&t=s0kuuIvk29UBhUtE-0",
      website: "",
      bgImg: kilazer,
    },
  ];

  return (
    <section
      className="bg-[#223975] flex flex-col lg:px-12 lg:py-14 max-lg:px-10 max-lg:py-14 gap-6 max-lg:gap-4 justify-center items-center h-[670px] relative sm:rounded-[50px]"
      id="projects">
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
          className="mySwiper h-full">
          {projectsInfo.map((proj, index) => (
            <SwiperSlide
              key={index}
              className="">
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
                    className="lg:px-4 lg:py-2.5 max-lg:px-3 max-lg:py-1 max-sm:text-xs  rounded-full hover:bg-blueDefault hover:text-whiteDefault bg-whiteDefault text-blueDefault hover:border-[#223a75] border-2 transition-colors duration-300">
                    Saber mais
                  </button>
                </div>

                <div
                  className={`w-full h-full rounded-[50px] flex flex-col justify-center gap-5 max-lg:gap-3 items-center absolute top-0 left-0 bg-[#2a55c2] transition-opacity duration-300 ease-in-out ${
                    openAboutIndex === index
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}>
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
                          className="w-44 max-sm:w-32 group lg:px-4 lg:py-2.5 max-lg:px-3 max-lg:py-1 max-lg:text-xs border-2 rounded-full border-[#DEE5EF] text-whiteDefault flex items-center hover:bg-whiteDefault transition-colors duration-300">
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
                          className="w-44 max-sm:w-32 group lg:px-4 lg:py-2.5 max-lg:px-3 max-lg:py-1 max-lg:text-xs border-2 rounded-full border-[#DEE5EF] text-whiteDefault flex items-center hover:bg-whiteDefault transition-colors duration-300">
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
                    className="lg:px-4 lg:py-2.5 max-lg:px-4 max-lg:py-2 max-lg:text-xs rounded-full bg-whiteDefault text-black  hover:text-whiteDefault hover:bg-blueDefault flex items-center transition-colors duration-300">
                    Fechar
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
