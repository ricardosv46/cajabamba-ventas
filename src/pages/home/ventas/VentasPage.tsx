import PlantillaPage from '@components/PlantillaPage/PlantillaPage'
import Input from '@components/shared/Input/Input'
import Select from '@components/shared/Select/Select'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import Table from '@components/shared/Table/Table'
import { IconEye, IconPlus } from '@icons'
import useVentas from '@services/useVentas'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IPropsVenta {
  vendedorId: number | null
  tipoVenta: string
  fechaInicial: string
  fechaFinal: string
}

const dataTHead = [
  'Tipo Comprobante',
  'Tipo Documento',
  'Documento',
  'Celular',
  'Email',
  'Monto',
  'Fecha Venta',
  'Tipo Pago',
  'Nombres o Razón social',
  'Acciones'
]

const dataTBody = [
  'tipoComprobante',
  'tipoDocumento',
  'numeroDocumento',
  'celular',
  'email',
  'precioTotal',
  'fechaVenta',
  'tipoVenta',
  'razonSocial'
]

const initialState = {
  fechaInicial: '',
  fechaFinal: '',
  vendedorId: null,
  tipoVenta: ''
}

const dataTipoVenta = [
  {
    value: 'Yape',
    label: 'Yape'
  },
  {
    value: 'Plin',
    label: 'Plin'
  },
  {
    value: 'Efectivo',
    label: 'Efectivo'
  },
  {
    value: 'Tarjeta',
    label: 'Tarjeta'
  }
]

const VerDetalle = ({ id }: { id: string }) => {
  const router = useNavigate()
  return (
    <button
      className="text-center btn-icon btn-ghost-primary"
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
  const [filtros, setFiltros] = useState<IPropsVenta>({
    vendedorId: null,
    tipoVenta: '',
    fechaInicial: '',
    fechaFinal: ''
  })

  const onSubmit = () => {
    setFiltros({
      ...values
    })
  }

  const { values, errors, touched, ...form } = useFormik({
    onSubmit,
    initialValues: initialState
  })

  const { ventas, loading, nTotal } = useVentas({
    pagina: state.page,
    numeroPagina: state.numberPaginate,
    ...filtros
  })

  const limpiarFiltro = () => {
    form.setValues({ vendedorId: null, tipoVenta: '', fechaInicial: '', fechaFinal: '' })
    setFiltros({ vendedorId: null, tipoVenta: '', fechaInicial: '', fechaFinal: '' })
    useState({
      pagina: 1,
      numeroPagina: 10
    })
  }

  return (
    <PlantillaPage
      title="Ventas"
      desc="Desde aqui podras visualizar la informacion de todas los ventas"
      button={
        <button
          className="self-end w-full mb-3 btn btn-solid-primary sm:w-max"
          onClick={() => router('asientos')}>
          <IconPlus />
          Crear Venta
        </button>
      }>
      <form
        onSubmit={form.handleSubmit}
        className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 ">
        <Select
          label="Tipo Venta"
          value={values.tipoVenta}
          options={dataTipoVenta}
          onChange={({ value }) => {
            form.setFieldValue('tipoVenta', value)
          }}
          dataExtractor={{
            label: 'label',
            value: 'value'
          }}
        />

        {/* <Input
          className="w-full"
          type="date"
          label="Fecha Inicial"
          {...form.getFieldProps('fechaInicial')}
        />
        <Input
          className="w-full"
          type="date"
          label="Fecha Final"
          {...form.getFieldProps('fechaFinal')}
        /> */}
        <button className="w-full px-0 btn btn-solid-green" type="submit">
          Filtrar
        </button>
        <button className="w-full px-0 btn btn-solid-red" type="button" onClick={limpiarFiltro}>
          Limpiar Filtro
        </button>
      </form>
      <Show
        condition={loading}
        loading
        isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
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
