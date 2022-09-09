import { useReporteAsientoVendedoraQuery } from '../generated/graphql'

interface Props {
  code: string
}

export const useGetReporteAsientoVendedora = ({ code }: Props) => {
  const { data, loading, refetch } = useReporteAsientoVendedoraQuery({
    fetchPolicy: 'network-only',
    variables: {
      code
    }
  })

  const reporte = data?.ReporteAsientoVendedora ?? ''

  return {
    loading,
    reporte
  }
}
