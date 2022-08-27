import PlantillaPage from '@components/PlantillaPage/PlantillaPage'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import Table from '@components/shared/Table/Table'
import { IconEye, IconPlus } from '@icons'
import useVendedoras from '@services/useVentas'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const dataTHead = [
	'Tipo Documento',
	'Documento',
	'Celular',
	'Email',
	'Fecha Venta',
	'Tipo Pago',
	'Nombres o Razón social',
	'Acciones'
]

const dataTBody = ['tipoComprobante', 'numeroComprobante', 'celular', 'email', 'fechaVenta', 'tipoVenta', 'razonSocial']

const VerDetalle = ({ id }: { id: string }) => {
	const router = useNavigate()
	return (
		<button
			className='text-center btn-icon btn-ghost-primary'
			onClick={() => {
				console.log(id)
				router(id)
			}}>
			<IconEye />
		</button>
	)
}

const VentasPage = () => {
	const router = useNavigate()
	const [state, setState] = useState({ page: 1, numberPaginate: 10 })
	const { ventas, loading, nTotal } = useVendedoras({
		numeroPagina: state.numberPaginate,
		pagina: state.page
	})
	return (
		<PlantillaPage
			title='Ventas'
			desc='Desde aqui podras visualizar la informacion de todas los ventas'
			button={
				<button
					className='self-end w-full mb-3 btn btn-solid-primary sm:w-max'
					onClick={() => router('asientos')}>
					<IconPlus />
					Crear Venta
				</button>
			}>
			<Show condition={loading} loading isDefault={<Spinner className='w-10 h-10 mx-auto my-20 border-4' />}>
				<Table
					rowId={'ventaId'}
					actions={VerDetalle}
					th={dataTHead}
					data={ventas}
					td={dataTBody}
					widthPaginator
					nTotal={nTotal}
					setState={setState}
					state={state}
				/>
			</Show>
		</PlantillaPage>
	)
}

export default VentasPage
