import PlantillaPage from '@components/PlantillaPage/PlantillaPage'
import ModalRegistrarAsientoVenta from '@components/shared/Modal/ModalRegistrarAsientoVenta'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import Table from '@components/shared/Table/Table'
import useToggle from '@hooks/useToggle'
import { IconPdf, IconUser } from '@icons'
import { useGetReporteAsientoVendedora } from '@services/useGetReporteAsientoVendedora'
import { useVentaId } from '@services/useVentaId'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const dataTHead = ['Codigo', 'Asiento', 'Tendido', 'Monto', 'Evento', 'Acciones']

const dataTBody = ['codigo', 'asiento', 'tendido', 'precio', ['Evento', 'titulo']]

const DetalleVenta = () => {
  const { onClose, isOpen, onOpen } = useToggle()
  const [datosVenta, setDatosventa] = useState()
  const { id } = useParams() as { id: string }
  const { venta, loading } = useVentaId({
    ventaId: Number(id)
  })

  console.log({ venta })

  const handleUpdate = () => {}

  const VerDetalle = ({ id, data }: { id: string; data?: any }) => {
    const code = `${data?.codigo}-${data?.asiento}-${data?.eventoId}`
    const { loading: loadingReporte, reporte: linkReporte } = useGetReporteAsientoVendedora({
      code
    })
    return (
      <div className="flex justify-center gap-3">
        <button
          className="text-center btn-icon btn-ghost-primary"
          onClick={() => {
            setDatosventa(data)
            onOpen()
          }}>
          <IconUser />
        </button>
        <button
          disabled={loadingReporte}
          className="text-center btn-icon btn-ghost-primary"
          onClick={() => window.open(linkReporte)}>
          <IconPdf />
        </button>
      </div>
    )
  }

  return (
    <>
      <PlantillaPage
        title={`Detalle Venta ${id}`}
        desc="Desde aqui podras visualizar detalle de la venta">
        <Show
          condition={loading}
          loading
          isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
          <Table
            rowId={'detalleVentaId'}
            actions={VerDetalle}
            th={dataTHead}
            data={venta.DetalleVenta}
            td={dataTBody}
          />
        </Show>
      </PlantillaPage>

      <ModalRegistrarAsientoVenta
        data={datosVenta}
        isOpen={isOpen}
        onClick={handleUpdate}
        onClose={onClose}
        header="Registar Datos"
        body="¿Estas seguro que deseas vender este asiento?"
      />
    </>
  )
}

export default DetalleVenta
