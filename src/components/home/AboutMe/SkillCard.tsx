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
		<div className=" flex flex-col bg-[#DEE5EF] sm:rounded-[50px] gap-4 px-12 py-12 text-blueDefault min-h-[615px] items-center text-center
		sm:w-[350px] max-lg:w-full cursor-pointer transition-all duration-700 hover:-translate-y-2 ">
			<img
				src={mainIcon}
				alt="Ícone Principal"
				className="w-14 h-14 "
			/>

			<h1 className="font-bold text-lg ">
				{title}
			</h1>

			<p className="text-sm ">
				{description}
			</p>

			<h2 className="font-semibold text-base ">
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
							className="Tool Icon"
						/>
					</div>
				))}
			</div>

			<div className="flex flex-col gap-1">
				<h2 className="font-semibold text-base ">
					Habilidades
				</h2>

				<div className="flex flex-col">
					{skills.map((text, index) => (
						<p
							key={index}
							className="text-sm "
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
