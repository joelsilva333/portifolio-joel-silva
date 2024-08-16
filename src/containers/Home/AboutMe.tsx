import {
	backend,
	expressJs,
	javascript,
	mySql,
	nodeJs,
	postgreSql,
	typescript,
} from "../../assets/icons/backendTools"
import {
	adobeXd,
	designIcon,
	figma,
	invision,
} from "../../assets/icons/designTools"
import {
	css,
	frontend,
	git,
	github,
	htmlIcon,
	nextJs,
	reactLogo,
	tailwind,
	vue,
} from "../../assets/icons/frontendTools"
import SkillCard from "../../components/home/AboutMe/SkillCard"

const AboutMe: React.FC = () => {
	const skillCardItems = [
		{
			mainIcon: designIcon,
			title: "Designer",
			description:
				"Valorizo uma estrutura de conteúdo simples, padrões de design limpos e interações bem planejadas.",
			toolTitle: "Ferramentas de Design",
			toolsIcons: [figma, invision, adobeXd],
			skills: [
				"Design Visual",
				"Prototipagem",
				"Design de Interação",
				"Responsividade",
				"Arquitetura da Informação",
				"Wireframing",
				"Testes de Usabilidade",
			],
		},
		{
			mainIcon: frontend,
			title: "Desenvolvedor Frontend",
			description:
				"Gosto de codificar tudo do zero e de transformar ideias em realidade no navegador.",
			toolTitle: "Ferramentas e Linguagens",
			toolsIcons: [
				htmlIcon,
				css,
				reactLogo,
				nextJs,
				vue,
				github,
				tailwind,
				git,
			],
			skills: [
				"Frameworks JavaScript (React & Vue.js)",
				"Responsividade",
				"Mobile-first",
				"Integração de API",
				"Controle de Versão (Git)",
				"Testes (Jest)",
				"Colaboração com UI/UX",
				"Acessibilidade (WCAG)",
				"Aplicações Web Progressivas (PWA)",
				"Aplicações de Página Única (SPA)",
				"Revisões de Código",
				"Integração Contínua/Desenvolvimento Contínuo (CI/CD)",
			],
		},
		{
			mainIcon: backend,
			title: "Desenvolvedor Backend",
			description:
				"Valorizo uma arquitetura robusta, padrões de código limpos e soluções escaláveis e eficientes.",
			toolTitle: "Ferramentas e Linguagens",
			toolsIcons: [
				javascript,
				typescript,
				nodeJs,
				expressJs,
				"",
				mySql,
				postgreSql,
			],
			skills: [
				"Linguagens de Programação (JavaScript & TypeScript)",
				"Frameworks Backend (Express)",
				"Banco de Dados (SQL)",
				"SQL (MySQL, PostgreSQL)",
				"ORM (Object-Relational Mapping)",
				"RESTful APIs",
				"Microsserviços",
				"Autenticação e Autorização",
				"Docker",
				"Gerenciamento de Estado",
				"Otimização de Desempenho",
			],
		},
	]

	return (
		<section className="bg-[#223975] sm:px-36 sm:py-20 max-sm:pt-20 flex flex-col gap-12 sm:rounded-[50px] items-center mt-4 ">
			<div className="flex flex-col gap-10 max-lg:gap-5 text-center lg:w-2/3 max-sm:w-2/3">
				<h2 className="max-sm:text-base text-2xl max-lg:text-xl">
					Oi, chamo-me Joel Germano da Silva. Prazer em conhecê-lo.
				</h2>
				<p className="max-sm:text-xs max-lg:text-sm">
					Desde que comecei minha jornada como desenvolvedor web e design, tenho
					trabalhado em projetos diversos, integrando dados via APIs, e criando
					experiências digitais envolventes e acessíveis. Tenho colaborado com
					startups e empresas, sempre com foco em entregar soluções detalhadas e
					de alta qualidade. Sou confiante, naturalmente curioso e estou sempre
					em busca de aperfeiçoar minhas habilidades.
				</p>
			</div>

			<div className="flex w-full gap-6 justify-center max-lg:flex-col max-lg:items-center">
				{skillCardItems.map((item, index) => (
					<SkillCard
						key={index}
						mainIcon={item.mainIcon}
						title={item.title}
						description={item.description}
						toolTitle={item.toolTitle}
						toolsIcons={item.toolsIcons}
						skills={item.skills}
					/>
				))}
			</div>
		</section>
	)
}

export default AboutMe
