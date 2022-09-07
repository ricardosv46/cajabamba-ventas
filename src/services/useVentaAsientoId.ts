import { useGetDetalleAsientoVentaQuery } from '../generated/graphql'

export const useVentaAsientoId = (input = { code: '' }) => {
	const { data, loading, refetch } = useGetDetalleAsientoVentaQuery({
		fetchPolicy: 'network-only',
		variables: {
			...input
		}
	})

	const asiento = data?.GetDetalleAsientoVenta ?? {}

	return {
		loading,
		asiento,
		refetch
	}
}
