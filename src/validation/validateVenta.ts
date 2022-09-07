import { isEmpty } from '@utils/isEmpty'
import { FormikErrors, FormikValues } from 'formik'

import { isEmail } from '../utils/isEmail'

export const validateVenta = (values: FormikValues) => {
  let errors: FormikErrors<FormikValues> = {}

  const isDocumento = values.tipoComprobante === 'Boleta'
  const isRUC = values.tipoComprobante === 'Factura'
  const isDNI = values.tipoDocumento === 'DNI'
  const isCE = values.tipoDocumento === 'CE'
  const isPasaporte = values.tipoDocumento === 'Pasaporte'

  const isVacio = values.tipoComprobante === ''

  if (isVacio) {
    if (isEmpty(values.numeroDocumento)) {
      errors.numeroDocumento = 'El Documento es requerido'
    }
  }

  if (isDocumento) {
    if (isEmpty(values.tipoDocumento)) {
      errors.tipoDocumento = 'El tipo de documento es requerido'
    }

    if (isEmpty(values.numeroDocumento)) {
      errors.numeroDocumento = 'El Documento es requerido'
    }

    if (values.numeroDocumento.length !== 8 && isDNI) {
      errors.numeroDocumento = 'El Documento debe tener 8 dígitos'
    }

    if (values.numeroDocumento.length !== 9 && isCE) {
      errors.numeroDocumento = 'El Documento debe tener 9 dígitos'
    }

    if (values.numeroDocumento.length !== 10 && isPasaporte) {
      errors.numeroDocumento = 'El Documento debe tener 10 dígitos'
    }

    if (isEmpty(values.nombres)) {
      errors.nombres = 'El nombre es requerido'
    }

    if (isEmpty(values.apellidos)) {
      errors.apellidos = 'El apellido es requerido'
    }
  }

  if (isRUC) {
    if (isEmpty(values.numeroDocumento)) {
      errors.numeroDocumento = 'El RUC es requerido'
    }

    if (values.numeroDocumento.length !== 11) {
      errors.numeroDocumento = 'El RUC debe tener 11 dígitos'
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

  return errors
}
