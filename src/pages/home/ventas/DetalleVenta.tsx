import CustomTable from '@components/CustomTable/CustomTable'
import PlantillaPage from '@components/PlantillaPage/PlantillaPage'
import ModalRegistrarAsientoVenta from '@components/shared/Modal/ModalRegistrarAsientoVenta'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import useToggle from '@hooks/useToggle'
import { IconPdf, IconUser } from '@icons'
import { useVentaId } from '@services/useVentaId'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const DetalleVenta = () => {
  const [state, setState] = useState('')
  const { onClose, isOpen, onOpen } = useToggle()
  const [datosVenta, setDatosventa] = useState({})

  const { id } = useParams() as { id: string }
  const { venta, loading } = useVentaId({
    ventaId: Number(id)
  })
  const token = localStorage.getItem('token')
  const getReporte = async (code: string) => {
    const res = await fetch('https://apicajabamba-dev.plazaticket.com/public/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify({
        query: `
        query ReporteAsientoVendedora($code: String) {
          ReporteAsientoVendedora(code: $code)
        }
        
          `,
        variables: {
          code
        }
      })
    }).then((res) => res.json())
    console.log(res.data.ReporteAsientoVendedora)
    return res.data.ReporteAsientoVendedora
  }

  const handleUpdate = () => {}

  return (
    <>
      <PlantillaPage
        title={`Detalle Venta ${id}`}
        desc="Desde aqui podras visualizar detalle de la venta">
        <Show
          condition={loading}
          loading
          isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
          <CustomTable>
            <thead>
              <tr className="dark:border-b-slate-700">
                <th className="text-center">Codigo</th>
                <th className="text-center">Asiento</th>
                <th className="text-center">Tendido</th>
                <th className="text-center">Monto</th>
                <th className="text-center">Evento</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {venta?.DetalleVenta?.map((item) => {
                const code = `${item?.codigo}-${item?.asiento}-${item?.eventoId}`

                return (
                  <tr
                    key={item?.detalleVentaId}
                    className="dark:bg-transparent dark:text-slate-50 dark:hover:bg-slate-900 dark:border-b-slate-700">
                    <td className="text-center ">{item?.codigo}</td>
                    <td className="text-center ">{item?.asiento}</td>
                    <td className="text-center ">{item?.tendido}</td>
                    <td className="text-center ">{item?.precio}</td>

                    <td className="text-center ">{item?.Evento?.titulo}</td>

                    <td>
                      {/* <Detalle
                        code={code}
                        onClick={() => {
                          setDatosventa(item)
                          onOpen()
                        }}
                      /> */}
                      <div className="flex justify-center gap-3">
                        <button className="text-center btn-icon btn-ghost-primary">
                          <IconUser />
                        </button>
                        <button
                          className="text-center btn-icon btn-ghost-primary"
                          onClick={async () => {
                            const respuesta = await getReporte(code)
                            console.log(respuesta)
                            window.open(respuesta)
                            // getReporteVendedora({ code }).then((res) => {
                            //   if (res.ok) {
                            //     window.open(res.linkReporte)
                            //   }
                            // })
                          }}>
                          <IconPdf />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </CustomTable>
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
