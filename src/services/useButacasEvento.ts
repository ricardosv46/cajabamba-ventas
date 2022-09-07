import { useGetAllButacaEventoQuery } from '@generated/graphql'

// Obtenemos todas los abonos
export const useButacasEvento = ({ tendido, eventoId }: { tendido: string; eventoId: number }) => {
  const { data, loading, refetch } = useGetAllButacaEventoQuery({
    fetchPolicy: 'network-only',
    variables: {
      tendido,
      eventoId
    }
  })

  const butacas = data?.GetAllButacaEvento?.data ?? []

  return {
    loading,
    butacas,
    refetch
  }
}
