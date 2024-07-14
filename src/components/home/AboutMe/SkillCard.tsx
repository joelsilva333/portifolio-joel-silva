import React from "react"

interface SkillCardProps {
	mainIcon: string
	title: string
	description: string
	toolTitle: string
	toolsIcons: string[]
	skills: string[]
}

const SkillCard: React.FC<SkillCardProps> = ({
	mainIcon,
	title,
	description,
	toolTitle,
	toolsIcons,
	skills,
}) => {
	return (
		<div className="group flex flex-col bg-[#DEE5EF] rounded-[50px] gap-4 px-12 py-12 text-blueDefault min-h-[615px] items-center text-center w-[350px] transition-colors duration-300 hover:bg-blueDefault hover:text-[#DEE5EF] hover:shadow-sm hover:shadow-white cursor-pointer">
			<img
				src={mainIcon}
				alt="Ícone Principal"
				className="w-14 h-14 transition-colors duration-300 group-hover:invert"
			/>

			<h1 className="font-bold text-lg transition-colors duration-300 group-hover:text-[#DEE5EF]">
				{title}
			</h1>

			<p className="text-sm transition-colors duration-300 group-hover:text-[#DEE5EF]">
				{description}
			</p>

			<h2 className="font-semibold text-base transition-colors duration-300 group-hover:text-[#DEE5EF]">
				{toolTitle}
			</h2>

			<div
				className={`grid ${
					toolsIcons.length === 3 ? "grid-cols-3" : "grid-cols-4"
				} gap-5 p-5 w-52`}
			>
				{toolsIcons.map((icon, index) => (
					<div key={index} className="flex items-center justify-center">
						<img
							src={icon}
							className="Tool Icon transition-colors duration-300"
						/>
					</div>
				))}
			</div>

			<div className="flex flex-col gap-1">
				<h2 className="font-semibold text-base transition-colors duration-300 group-hover:text-[#DEE5EF]">
					Habilidades
				</h2>

				<div className="flex flex-col">
					{skills.map((text, index) => (
						<p
							key={index}
							className="text-sm transition-colors duration-300 group-hover:text-[#DEE5EF]"
						>
							{text}
						</p>
					))}
				</div>
			</div>
		</div>
	)
}

export default SkillCard
