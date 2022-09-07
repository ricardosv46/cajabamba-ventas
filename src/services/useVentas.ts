import {
  useCreateVentaAbonadoMutation,
  useCreateVentaMutation,
  useGetAllVentasQuery
} from '@generated/graphql'
interface IPropsVenta {
  pagina?: number
  numeroPagina?: number
  vendedorId?: number | null
  tipoVenta?: string
  fechaInicial?: string
  fechaFinal?: string
}

interface ICreate {
  input1: {}
  input2: {}
}

const useVentas = ({
  pagina = 1,
  numeroPagina = 10,
  vendedorId = null,
  tipoVenta = '',
  fechaInicial = '',
  fechaFinal = ''
}: IPropsVenta) => {
  const { data, loading, refetch } = useGetAllVentasQuery({
    fetchPolicy: 'network-only',
    variables: {
      pagina,
      numeroPagina,
      vendedorId,
      tipoVenta,
      fechaInicial,
      fechaFinal
    }
  })
  const ventas = data?.GetAllVentas?.data ?? []
  const nTotal = data?.GetAllVentas?.numeroTotal ?? 0

  const [CreateVentaAbonado, { loading: loadingVentaAbonado }] = useCreateVentaAbonadoMutation()

  const createVentaAbonado = async ({ input1, input2 }: ICreate) => {
    try {
      const res = await CreateVentaAbonado({
        variables: {
          input1,
          input2
        }
      })

      if (res.data?.CreateVentaAbonado) {
        return { ok: true, ventaId: res.data?.CreateVentaAbonado?.ventaId }
      }
      refetch()
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }
  }

  const [CreateVentaEvento, { loading: loadingVentaAEvento }] = useCreateVentaMutation()

  const createVentaEvento = async ({ input1, input2 }: ICreate) => {
    try {
      const res = await CreateVentaEvento({
        variables: {
          input1,
          input2
        }
      })

      if (res.data?.CreateVenta) {
        return { ok: true, ventaId: res.data?.CreateVenta?.ventaId }
      }
      refetch()
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }
  }

  return {
    ventas,
    loading,
    refetch,
    nTotal,
    createVentaAbonado,
    loadingVentaAbonado,
    createVentaEvento,
    loadingVentaAEvento
  }
}

export default useVentas
