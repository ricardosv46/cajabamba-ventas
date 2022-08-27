import { IconClose } from '@icons'
import { useVentaId } from '@services/useVentaId'
import useVendedoras from '@services/useVentas'
import { validateUpdateAsiento } from '@validation/validateUpdateAsiento'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import Modal from '.'
import Input from '../Input/Input'
import Select from '../Select/Select'

interface IModal {
	isOpen: boolean
	onClose: () => void
	onClick: () => void
	header: string
	body: string
	data?: any
}

const dataDocumento = [
	{ value: 'DNI', label: 'DNI' },
	{ value: 'CE', label: 'CE' }
]

const ModalRegistrarAsientoVenta = ({ isOpen, onClick, onClose, body, header, data }: IModal) => {
	const { updateAsientoVenta, loadingUpdateAsiento } = useVentaId()
	const code = `${data?.codigo}-${data?.asiento}-${data?.eventoId}`
	console.log({ data })
	const onSubmit = () => {
		updateAsientoVenta({
			tipoDocumento: values.tipoDocumento,
			numDocumento: values.numDocumento,
			nombres: values.nombres,
			apellidos: values.apellidos,
			code
		}).then((res) => {
			if (res?.ok) {
				toast.success('Asiento Registrado Correctamente', {
					theme: 'colored',
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined
				})
				onClose()
			} else {
				toast.error(res?.error, {
					theme: 'colored',
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined
				})
			}
		})
	}

	const { values, errors, touched, handleReset, handleSubmit, ...form } = useFormik({
		validate: validateUpdateAsiento,
		onSubmit,
		initialValues: {
			tipoDocumento: '',
			numDocumento: '',
			nombres: '',
			apellidos: ''
		}
	})

	useEffect(() => {
		return () => {
			handleReset({})
		}
	}, [isOpen])

	return (
		<Modal isOpen={isOpen} onClose={onClose} hasOverlay>
			<div className='px-8 py-5 bg-white rounded-lg sm:w-[450px] dark:bg-gray-800 dark:text-white '>
				<div className='flex justify-between'>
					<h2 className='text-lg font-bold'>{header}</h2>
					<IconClose className='w-4 h-4 cursor-pointer' onClick={onClose} />
				</div>

				<form
					onSubmit={handleSubmit}
					className='w-full  h-full flex z-[70] bg-white dark:bg-slate-800 rounded-md  flex-col gap-5 pt-5'>
					<Select
						label='Tipo Documento'
						value={values.tipoDocumento}
						options={dataDocumento}
						onChange={({ value }) => {
							form.setFieldValue('tipoDocumento', value)
						}}
						dataExtractor={{
							label: 'label',
							value: 'value'
						}}
						error={errors.tipoDocumento}
						touched={touched?.tipoDocumento ?? false}
					/>
					<Input
						type='text'
						label='Documento'
						{...form.getFieldProps('numDocumento')}
						error={errors.numDocumento}
						touched={touched?.numDocumento ?? false}
						maxLength={values.tipoDocumento === 'DNI' ? 8 : 9}
					/>
					<Input
						type='text'
						label='Nombres'
						{...form.getFieldProps('nombres')}
						error={errors.nombres}
						touched={touched?.nombres ?? false}
					/>
					<Input
						type='text'
						label='Apellidos'
						{...form.getFieldProps('apellidos')}
						error={errors.apellidos}
						touched={touched?.apellidos ?? false}
					/>
					<div className='flex items-center justify-end gap-3 mt-3 '>
						<button
							type='button'
							onClick={onClose}
							className='px-4 py-2 text-lg font-semibold text-gray-600 bg-gray-100 rounded-lg'>
							Cancelar
						</button>
						<button
							type='submit'
							disabled={loadingUpdateAsiento}
							className='px-4 py-2 text-lg font-semibold text-white rounded-lg bg-primary-500'>
							Confirmar
						</button>
					</div>
				</form>
			</div>
		</Modal>
	)
}

export default ModalRegistrarAsientoVenta
