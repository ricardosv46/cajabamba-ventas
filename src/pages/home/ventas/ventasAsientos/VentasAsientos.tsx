import PlantillaPage from '@components/PlantillaPage/PlantillaPage'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import useEventos from '@services/useEventos'
import useFeria from '@services/useFeria'
import { classNames } from '@utils/classNames'
import moment from 'moment'
import { Link, useNavigate } from 'react-router-dom'

const VentasAsientos = () => {
	const { abono, loading: loadingFeria } = useFeria()
	const { eventos, loading: loadingEventos } = useEventos({ estado: 'Activado', feriaId: 1 })
	const { fechaFinal, fechaInicial, horaFinal, horaInicial } = abono
	const router = useNavigate()
	const fechaI = `${fechaInicial} ${horaInicial}`
	const fechaF = `${fechaFinal} ${horaFinal}`
	const isDisableAbono = moment().isBetween(moment(fechaI), moment(fechaF)) ? false : true

	return (
		<PlantillaPage title='Butacas' desc='Desde aqui podras visualizar la informacion de todas los butacas'>
			<h2 className='text-2xl font-bold text-left text-slate-800 dark:text-slate-200 '>Abono</h2>
			<Show condition={loadingFeria} loading isDefault={<Spinner className='w-10 h-10 mx-auto my-10 border-4' />}>
				<div className='flex flex-col items-center gap-10 mt-10 font-bold text-center text-gray-700 sm:flex-row'>
					<button
						className={classNames([isDisableAbono ? 'grayscale' : '', 'w-64'])}
						disabled={isDisableAbono}
						onClick={() => {
							router('abono')
						}}>
						<div className='relative w-64 overflow-hidden rounded-lg h-36'>
							<img
								className={classNames([
									isDisableAbono ? 'filter' : '',
									' w-full h-full absolute inset-0 object-cover z-10'
								])}
								src={abono?.imagenPrincipal?.url!}
								alt={abono?.titulo!}
							/>
						</div>

						<p className={classNames(['text-yellow-500 z-10 dark:text-primary-500'])}>{abono?.titulo!}</p>
					</button>
				</div>
			</Show>
			<h2 className='mt-10 text-2xl font-bold text-left text-slate-800 dark:text-slate-200'>Eventos</h2>

			<Show
				condition={loadingEventos}
				loading
				isDefault={<Spinner className='w-10 h-10 mx-auto my-10 border-4' />}>
				<div className='flex flex-col flex-wrap items-center gap-10 mt-10 font-bold text-center text-gray-700 sm:flex-row '>
					{eventos.map((evento) => {
						const fechaInicialEvento = `${evento?.fechaInicial} ${evento?.horaInicial}`
						const fechaFinalEvento = `${evento?.fechaFinal} ${evento?.horaFinal}`

						const isDisabledEvento = moment().isBetween(
							moment(fechaInicialEvento),
							moment(fechaFinalEvento)
						)
							? false
							: true

						return (
							<button
								className={classNames([isDisabledEvento ? 'grayscale' : '', 'w-64'])}
								disabled={isDisabledEvento}
								onClick={() => {
									router(`evento/${evento?.slug!}`, {
										state: { evento }
									})
								}}>
								<div className='relative w-64 overflow-hidden rounded-lg h-36'>
									<img
										className={`w-full h-full absolute inset-0 object-cover z-10`}
										src={evento?.imagenPrincipal?.url!}
										alt={evento?.titulo!}
									/>
								</div>
								<p className={classNames(['z-10 text-yellow-500 dark:text-primary-500'])}>
									{evento?.titulo}
								</p>
							</button>
						)
					})}
				</div>
			</Show>
		</PlantillaPage>
	)
}

export default VentasAsientos
