import { isEmpty } from '@utils/isEmpty'
import { FormikErrors, FormikValues } from 'formik'

export const validateUpdateAsiento = (values: FormikValues) => {
	let errors: FormikErrors<FormikValues> = {}

	const isDNI = values.tipoDocumento === 'DNI'
	const isCE = values.tipoDocumento === 'CE'

	const isVacio = values.tipoDocumento === ''

	if (isVacio) {
		if (isEmpty(values.numDocumento)) {
			errors.numDocumento = 'El Documento es requerido'
		}
		if (isEmpty(values.tipoDocumento)) {
			errors.tipoDocumento = 'El Tipo de Documento es requerido'
		}
	}

	if (isDNI) {
		if (isEmpty(values.numDocumento)) {
			errors.numDocumento = 'El Documento es requerido'
		}

		if (values.numDocumento.length !== 8) {
			errors.numDocumento = 'El Documento debe tener 8 dígitos'
		}
	}

	if (isCE) {
		if (isEmpty(values.numDocumento)) {
			errors.numDocumento = 'El CE es requerido'
		}

		if (values.numDocumento.length !== 9) {
			errors.numDocumento = 'El CE debe tener 9 dígitos'
		}
	}

	if (isEmpty(values.nombres)) {
		errors.nombres = 'El nombre es requerido'
	}

	if (isEmpty(values.apellidos)) {
		errors.apellidos = 'El apellido es requerido'
	}

	return errors
}
