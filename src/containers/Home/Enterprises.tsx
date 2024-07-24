import React from "react"
import EnterpriseCard from "../../components/home/Enterprises/EnterpriseCard"
import { angoVerso, digitalBoost, gscLogo, ocasoLogo } from "../../assets/home/Enterprises"

const Enterprises: React.FC = () => {
	const enterpriseInfo = [
		{
			imgSrc: ocasoLogo,
			date: "19-02-2024 - Até a recente data.",
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
		<section className="flex flex-col bg-[#223975] py-20 px-36 justify-center items-center rounded-[50px]  gap-12 z-40">
			<h2 className="text-xl w-2/4 text-center">
				Tenho orgulho de ter colaborado com algumas empresas incríveis, tais
				como:
			</h2>

			<div className="grid grid-cols-4 gap-8 justify-between p-6 ">
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
