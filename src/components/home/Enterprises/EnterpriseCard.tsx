interface Props {
	imgSrc: string
	date: string
	name: string
}

const EnterpriseCard: React.FC<Props> = ({ imgSrc, date, name }) => {
	return (
		<div className="flex flex-col items-center gap-2">
			<div className="bg-whiteDefault rounded-[50px] w-64 h-44 flex justify-center items-center px-12 py-11 cursor-pointer transition-all duration-700 hover:-translate-y-2 hover:skew-x-3">
				<img src={imgSrc} alt="" className="" />
			</div>

			<i className="text-sm">{name}</i>
			<p className="text-xs">{date}</p>
		</div>
	)
}

export default EnterpriseCard
