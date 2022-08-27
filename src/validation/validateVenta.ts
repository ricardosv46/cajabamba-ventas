import { isEmpty } from '@utils/isEmpty'
import { FormikErrors, FormikValues } from 'formik'

import { isEmail } from '../utils/isEmail'

export const validateVenta = (values: FormikValues) => {
	let errors: FormikErrors<FormikValues> = {}

	const isDNI = values.tipoComprobante === 'Boleta'
	const isRUC = values.tipoComprobante === 'Factura'

	const isVacio = values.tipoComprobante === ''

	if (isVacio) {
		if (isEmpty(values.numeroComprobante)) {
			errors.numeroComprobante = 'El Documento es requerido'
		}
	}

	if (isDNI) {
		if (isEmpty(values.numeroComprobante)) {
			errors.numeroComprobante = 'El Documento es requerido'
		}

		if (values.numeroComprobante.length !== 8) {
			errors.numeroComprobante = 'El Documento debe tener 8 dígitos'
		}

		if (isEmpty(values.nombres)) {
			errors.nombres = 'El nombre es requerido'
		}

		if (isEmpty(values.apellidos)) {
			errors.apellidos = 'El apellido es requerido'
		}
	}

	if (isRUC) {
		if (isEmpty(values.numeroComprobante)) {
			errors.numeroComprobante = 'El RUC es requerido'
		}

		if (values.numeroComprobante.length !== 11) {
			errors.numeroComprobante = 'El RUC debe tener 11 dígitos'
		}

		if (isEmpty(values.razonSocial)) {
			errors.razonSocial = 'La Razón Social es requerida'
		}
	}

	if (isEmpty(values.celular)) {
		errors.celular = 'El número es requerido'
	}

	if (isEmpty(values.email)) {
		errors.email = 'El Correo es requerido'
	}

	if (!isEmpty(values.email) && !isEmail(values.email)) {
		errors.email = 'Debe ser un Correo valido'
	}

	if (!isEmpty(values.email) && !isEmail(values.email)) {
		errors.email = 'Debe ser un Correo valido'
	}
	if (isEmpty(values.tipoComprobante)) {
		errors.tipoComprobante = 'El Tipo de Comprobante es requerido'
	}
	if (isEmpty(values.tipoVenta)) {
		errors.tipoVenta = 'El Tipo de pago es requerido'
	}
	console.log(errors)
	return errors
}
