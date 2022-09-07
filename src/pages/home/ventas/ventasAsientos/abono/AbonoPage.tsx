import Asientos, { IColums } from '@components/asientos'

import PlantillaPage from '@components/PlantillaPage/PlantillaPage'
import Input from '@components/shared/Input/Input'
import Modal from '@components/shared/Modal'
import ModalConfirmar from '@components/shared/Modal/ModalConfirmar'
import Select from '@components/shared/Select/Select'
import { Show } from '@components/shared/Show/Show'
import useToggle from '@hooks/useToggle'
import { useAsientosAbonado } from '@services/useAsientosAbonado'
import useButacas from '@services/useButacas'
import { usePreciosRefs } from '@services/usePreciosRefs'
import { classNames } from '@utils/classNames'
import { genNombreFilas } from '@utils/genNombreFilas'
import { useFormik } from 'formik'
import React, { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { validateVenta } from '@validation/validateVenta'
import { IconChevronLeft } from '@icons'
import useVendedoras from '@services/useVentas'
import { useNavigate } from 'react-router-dom'
import Spinner from '@components/shared/Spinner/Spinner'
import moment from 'moment'
import { useBloques } from '@services/useBloques'
const Abono = () => {
  const [innerValue, setInnerValue] = useState<string>('T1P')
  const [seleccionados, setSeleccionados] = useState<IColums[]>([])
  const { tendidos } = usePreciosRefs()
  const { onOpen, onClose, isOpen } = useToggle()
  const { onOpen: onOpenForm, onClose: onCloseForm, isOpen: isOpenForm } = useToggle()
  const router = useNavigate()
  const { asientos, refetch: refetchAsientos } = useAsientosAbonado({
    feriaId: 1,
    tendido: innerValue
  })
  const { createVentaAbonado, loadingVentaAbonado } = useVendedoras({})
  const fecha = moment().format('YYYY-MM-DD')
  const { bloques, loading: loadingBloques } = useBloques({ feriaId: 1, tendido: innerValue })
  const dataComprobante = [
    { value: 'Boleta', label: 'Boleta' },
    { value: 'Factura', label: 'Factura' }
  ]

  const dataDocumento = [
    { value: 'DNI', label: 'DNI' },
    { value: 'CE', label: 'Carnet' },
    { value: 'Pasaporte', label: 'Pasaporte' }
  ]

  const dataTipoVenta = [
    { value: 'Yape', label: 'Yape' },
    { value: 'Plin', label: 'Plin' },
    { value: 'Tarjeta', label: 'Tarjeta' },
    { value: 'Efectivo', label: 'Efectivo' }
  ]

  const categorias = tendidos.map((tendido) => ({
    value: tendido?.tendido!,
    label: tendido?.titulo!
    // desc: tendido?.tendido!
  }))
  const { db: butacas, loading, refetch } = useButacas({ tendido: innerValue })

  const dataAsientos = useMemo(() => {
    if (butacas?.length && !loading) {
      return butacas.map((item, i) => ({
        tendido: item?.tendido || '',
        butacaId: item?.butacaId || '',
        codigo: item?.codigo || '',
        cantidad: item?.cantidad || 0,
        precio: item?.precio || 0
      }))
    }
  }, [butacas, loading])

  useEffect(() => {
    refetch()
    refetchAsientos()
    setSeleccionados([])
  }, [innerValue])

  const total = seleccionados.reduce((prev, curr) => prev + curr.precio, 0)
  const onSubmit = () => {
    createVentaAbonado({
      input1: {
        tipoComprobante: values.tipoComprobante,
        tipoDocumento: values.tipoComprobante === 'Factura' ? 'RUC' : values.tipoDocumento,
        numeroDocumento: values.numeroDocumento,
        precioTotal: total,
        fechaVenta: fecha,
        razonSocial:
          values.tipoComprobante === 'Factura'
            ? values.razonSocial
            : values.nombres + ' ' + values.apellidos,
        tipoVenta: values.tipoVenta,
        celular: values.celular,
        email: values.email
      },
      input2: seleccionados
    }).then((res) => {
      if (res?.ok) {
        toast.success('Asientos Vendidos Correctamente', {
          theme: 'colored',
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
        refetchAsientos()
        setSeleccionados([])
        router(`/ventas/${res?.ventaId}`)
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

  const { values, errors, touched, ...form } = useFormik({
    validate: validateVenta,
    onSubmit,
    initialValues: {
      tipoComprobante: '',
      tipoDocumento: '',
      numeroDocumento: '',
      email: '',
      celular: '',
      razonSocial: '',
      nombres: '',
      apellidos: '',
      tipoVenta: ''
    }
  })

  return (
    <>
      <PlantillaPage
        title="Abono"
        desc="Desde aqui podras vender los abonos"
        goback={() => {
          if (isOpenForm) {
            return onCloseForm()
          }
          router(-1)
        }}>
        <Show condition={!isOpenForm} className="pt-5">
          <h2 className="text-xl text-center text-primary-500 dark:text-second-500">
            SELECCIONA TUS ASIENTOS
          </h2>

          <div className="flex flex-col justify-center py-5 mt-5 border-y-2 border-primary-500 dark:border-second-500">
            <Select
              label="Tendido"
              value={innerValue}
              options={categorias}
              onChange={({ value }) => {
                console.log(value)
                setInnerValue(value)
              }}
              dataExtractor={{
                label: 'label',
                value: 'value'
              }}
            />

            {dataAsientos?.length && innerValue?.length > 0 && (
              <Asientos
                {...{
                  bloques,
                  data: dataAsientos,
                  desabilitados: asientos,
                  seleccionados,
                  setSeleccionados,
                  nombreFilas: genNombreFilas(innerValue)
                }}
                tipo="abono"
                doble={
                  innerValue === 'T2S' ? 'Tendido2' : innerValue === 'T3' ? 'Tendido3' : 'Ruedo'
                }
                direccion={
                  innerValue === 'T1I' ? 'start' : innerValue === 'T4P' ? 'start' : 'center'
                }
                id={innerValue}
              />
            )}
          </div>
          <div className="flex gap-5 p-5 text-sm lg:text-lg">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-primary-900 rounded-full"></span>
              <p className="text-tertiary dark:text-yellow-500">Seleccionados</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-second-500 rounded-full"></span>
              <p className="text-tertiary dark:text-yellow-500">Libres</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-gray-500 rounded-full"></span>
              <p className="text-tertiary dark:text-yellow-500">No disponibles</p>
            </div>
          </div>

          <div className="flex justify-center w-full bg-second-500">
            <div className="py-10 px-5 max-w-[1200px] flex flex-col lg:flex-row justify-between w-full">
              <div className="flex flex-col items-center gap-5 lg:flex-row">
                <p className="font-bold text-primary">Seleccionados:</p>
                <div className="flex flex-wrap gap-2 leading-none lg:grid lg:grid-cols-10">
                  {seleccionados.map((item) => (
                    <p key={item.reservado} className="text-xs font-bold text-primary">
                      {item.reservado}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-end">
                <button
                  disabled={seleccionados.length === 0}
                  className={classNames([
                    'px-5 py-2 mt-10 text-white rounded-lg bg-primary-600 lg:mt-0',
                    seleccionados.length === 0 ? 'opacity-50' : ''
                  ])}
                  onClick={onOpenForm}>
                  Vender
                </button>
              </div>
            </div>
          </div>
        </Show>
        <Show condition={isOpenForm}>
          <div className="flex flex-col items-center justify-center gap-10 mt-10 lg:flex-row ">
            <form
              onSubmit={form.handleSubmit}
              className="flex flex-col w-full gap-5 md:grid sm:grid-cols-2">
              <Select
                label="Tipo Comprobante"
                value={values.tipoComprobante}
                options={dataComprobante}
                onChange={({ value }) => {
                  form.setFieldValue('tipoComprobante', value)
                }}
                dataExtractor={{
                  label: 'label',
                  value: 'value'
                }}
                error={errors.tipoComprobante}
                touched={touched?.tipoComprobante ?? false}
              />
              {values.tipoComprobante === 'Boleta' && (
                <Select
                  label="Tipo Documento"
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
              )}
              <Input
                type="text"
                label={values.tipoComprobante === 'Factura' ? 'RUC' : 'Documento'}
                {...form.getFieldProps('numeroDocumento')}
                error={errors.numeroDocumento}
                touched={touched?.numeroDocumento ?? false}
                maxLength={
                  values.tipoComprobante === 'Factura'
                    ? 11
                    : values.tipoDocumento === 'DNI'
                    ? 8
                    : values.tipoDocumento === 'CE'
                    ? 9
                    : 10
                }
              />
              {values.tipoComprobante === 'Factura' && (
                <Input
                  type="text"
                  label="Razón Social"
                  {...form.getFieldProps('razonSocial')}
                  error={errors.razonSocial}
                  touched={touched?.razonSocial ?? false}
                />
              )}
              {values.tipoComprobante === 'Boleta' && (
                <Input
                  type="text"
                  label="Nombres"
                  {...form.getFieldProps('nombres')}
                  error={errors.nombres}
                  touched={touched?.nombres ?? false}
                />
              )}

              {values.tipoComprobante === 'Boleta' && (
                <Input
                  type="text"
                  label="Apellidos"
                  {...form.getFieldProps('apellidos')}
                  error={errors.apellidos}
                  touched={touched?.apellidos ?? false}
                />
              )}
              <Select
                label="Tipo Pago"
                value={values.tipoVenta}
                options={dataTipoVenta}
                onChange={({ value }) => {
                  form.setFieldValue('tipoVenta', value)
                }}
                dataExtractor={{
                  label: 'label',
                  value: 'value'
                }}
                error={errors.tipoVenta}
                touched={touched?.tipoVenta ?? false}
              />
              <Input
                type="text"
                label="Celular"
                {...form.getFieldProps('celular')}
                error={errors.celular}
                touched={touched?.celular ?? false}
              />
              <Input
                type="text"
                label="Correo"
                {...form.getFieldProps('email')}
                error={errors.email}
                touched={touched?.email ?? false}
              />

              <div className="flex items-center justify-center col-span-2">
                <button
                  type="submit"
                  disabled={loadingVentaAbonado || seleccionados.length === 0}
                  className="w-full sm:w-auto xl:w-1/3 btn btn-solid-primary">
                  Crear Venta
                  {loadingVentaAbonado && <Spinner />}
                </button>
              </div>
            </form>
            <div className="p-5 text-white rounded-lg bg-primary-100">
              <div className="flex justify-center w-full ">
                <p className="text-2xl font-bold leading-none ">Abono</p>
              </div>
              <div className="flex justify-between">
                <p className="w-[300px] text-xl font-bold">Nro de entradas</p>
                <p className="text-xl font-bold">{seleccionados.length}</p>
              </div>
              {seleccionados.map((item) => {
                const desabilitado = asientos.some(
                  (desabilitado) => desabilitado?.reservado === item?.reservado
                )

                const newtiems = seleccionados.filter(
                  (seleccionado) => seleccionado.reservado !== item.reservado
                )

                const removeItem = () => {
                  setSeleccionados(newtiems)
                }

                return (
                  <div key={item.reservado} className="relative">
                    <div className="flex justify-between w-full ">
                      <p className="mt-2 text-xs leading-none ">1 x ABONO – {item.reservado}</p>
                      <p className="font-bold leading-none text-md">S/{item.precio.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between w-full leading-none">
                      <p className="text-xs leading-none text-red-500 left-5">
                        {desabilitado ? 'No disponible por favor vuleva a seleccionar' : ''}
                      </p>
                    </div>

                    <button className="absolute text-red-500 -top-1 -right-4" onClick={removeItem}>
                      X
                    </button>
                  </div>
                )
              })}
              <div className="flex items-center justify-between mt-10 text-2xl font-bold">
                <p className="w-[200px] ">Total</p>
                <p>S/{total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </Show>
      </PlantillaPage>
    </>
  )
}

export default Abono
