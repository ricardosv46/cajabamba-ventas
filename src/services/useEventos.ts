import { useGetAllEventosQuery } from '@generated/graphql'

const useEventos = (input = { feriaId: 1, estado: 'Activado' }) => {
	const { data, loading, refetch } = useGetAllEventosQuery({
		fetchPolicy: 'network-only',
		variables: {
			...input
		}
	})
	const eventos = data?.GetAllEventos?.data ?? []

	return {
		eventos,
		loading,
		refetch
	}
}

export default useEventos
