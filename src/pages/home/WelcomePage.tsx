import Table from '@components/shared/Table/Table'
import ToggleTheme from '@components/shared/ToggleTheme/ToggleTheme'
import { IconBars } from '@icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Welcome from '../../assets/imgs/welcome.png'
import { variables } from '../../data/variables'

const WelcomePage = () => {
	const user = JSON.parse(localStorage.getItem('user')!)
	const { linkVisitarSitio, nombreVisitarSitio, linkSoporte } = variables

	return (
		<div className='p-10'>
			<div className='flex items-center justify-between px-4 py-8 rounded-lg bg-primary-500 dark:bg-second-500 md:px-12'>
				<div className='flex flex-col gap-5 font-bold text-white'>
					<h1 className='text-2xl font-bold text-yellow-500 lg:text-4xl dark:text-primary-500'>
						Bienvenid@ {user?.nombres}
					</h1>
					<p>
						Desde el panel de administración podrás,agregar,modificar,eliminar información referente atu
						tienda.
					</p>
					<p>
						Recuerda que si tienes algún problema o duda puedes contactarnos.
						{/* <span className='text-red-500'>{linkSoporte}</span> */}
					</p>
					<p className='font-semibold'>Estamos felices de ser tus aliados en el crecimiento de tu negocio.</p>
				</div>
				<img src={Welcome} className='w-full h-full hidden lg:block max-w-[200px]' alt='welcome' />
			</div>
			<div className='flex flex-col items-center justify-center gap-10 mt-10 text-3xl font-bold text-center text-gray-700 sm:flex-row '>
				<button onClick={() => window.open('https://laesperanza.plazaticket.com')}>
					<div className='flex items-center justify-center px-10 rounded-lg cursor-pointer bg-primary-500 dark:bg-second-500 w-80 h-36'>
						<p className='text-yellow-500 dark:text-primary-500'>{nombreVisitarSitio}</p>
					</div>
				</button>
				{/* <Link to='/products'>
					<div className='flex items-center justify-center px-10 bg-gray-300 rounded-lg cursor-pointer w-60 h-36'>
						<p>Productos Registrados</p>
					</div>
				</Link> */}
			</div>
		</div>
	)
}

export default WelcomePage
