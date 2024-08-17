import React from "react"
import EnterpriseCard from "../../components/home/Enterprises/EnterpriseCard"
import { angoVerso, digitalBoost, gscLogo, ocasoLogo } from "../../assets/home/Enterprises"

const Enterprises: React.FC = () => {
	const enterpriseInfo = [
		{
			imgSrc: ocasoLogo,
			date: "21-02-2024 - Até a recente data.",
			name: "OCASO Group",
		},
		{
			imgSrc: gscLogo,
			date: "23-01-2024 - Até a recente data.",
			name: "Global Services Corporation",
		},
		{
			imgSrc: angoVerso,
			date: "06-07-2024 - Até a recente data.",
			name: "AngoVerso",
		},
		{
			imgSrc: digitalBoost,
			date: "16-04-2024 - Até a recente data.",
			name: "Digital Boost",
		},
	]
	return (
		<section className="flex flex-col bg-[#223975] md:py-20 lg:px-16 max-lg:px-10 max-lg:py-12  justify-center items-center sm:rounded-[50px] gap-12 max-lg:gap-4 ma z-40">
			<h2 className="text-xl max-lg:text-lg max-sm:text-base lg:w-2/4 max-lg:w-full text-center">
				Tenho orgulho de ter colaborado com algumas empresas incríveis, tais
				como:
			</h2>

			<div className="grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-8 justify-between p-6  w-full">
				{enterpriseInfo.map((enterprise, index) => (
					<EnterpriseCard
						key={index}
						imgSrc={enterprise.imgSrc}
						date={enterprise.date}
						name={enterprise.name}
					/>
				))}
			</div>
		</section>
	)
}

export default Enterprises
