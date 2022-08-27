import { useGetAllPrecioReferencialQuery } from '@generated/graphql'

// Obtenemos todas los abonos
export const usePreciosRefs = () => {
	const { data, loading, refetch } = useGetAllPrecioReferencialQuery({
		fetchPolicy: 'network-only',
		variables: {}
	})

	const tendidos = data?.GetAllPrecioReferencial ?? []

	return {
		loading,
		tendidos,
		refetch
	}
}
