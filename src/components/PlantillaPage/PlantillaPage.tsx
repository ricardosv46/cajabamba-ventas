import { IconChevronLeft } from '@icons'
import React, { ReactElement } from 'react'

interface Props {
	children: ReactElement | ReactElement[]
	title: string
	button?: ReactElement
	desc: string
	goback?: () => void
}

const PlantillaPage = ({ children, title, button, desc, goback }: Props) => {
	return (
		<div className='p-10'>
			<div className='flex flex-col'>
				{goback ? (
					<div className='flex items-center gap-2 mb-3'>
						<button
							className='flex justify-center items-center text-white mt-1 p-1.5 bg-primary-500 rounded-full cursor-pointer '
							onClick={goback}>
							<IconChevronLeft />
						</button>
						<h1 className='text-3xl font-bold dark:text-slate-200'>{title}</h1>
					</div>
				) : (
					<h1 className='mb-3 text-3xl font-bold dark:text-slate-200 '>{title}</h1>
				)}

				<p className='mb-3 text-sm md:text-md text-slate-400'>{desc}</p>
				<div className='w-full mb-3 ml-auto sm:w-max'>{button}</div>
			</div>
			<div>{children}</div>
		</div>
	)
}
export default PlantillaPage
