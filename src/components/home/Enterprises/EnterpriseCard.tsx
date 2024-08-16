interface Props {
	imgSrc: string
	date: string
	name: string
}

const EnterpriseCard: React.FC<Props> = ({ imgSrc, date, name }) => {
	return (
		<div className="flex flex-col items-center gap-2 w-fit mx-auto">
			<div className="bg-whiteDefault rounded-[50px] w-64 max-lg:w-52 h-44 max-lg:h-32 flex justify-center items-center lg:px-12 max-lg:px-8 lg:py-11 max-lg:py-6 cursor-pointer transition-all duration-700 hover:-translate-y-2 hover:skew-x-3">
				<img src={imgSrc} alt="" className="max-lg:w-28"/>
			</div>

			<i className="text-sm">{name}</i>
			<p className="text-xs">{date}</p>
		</div>
	)
}

export default EnterpriseCard
