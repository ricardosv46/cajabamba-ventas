import { useGetAllButacasQuery } from '@generated/graphql'

const useButacas = ({ tendido }: { tendido: string }) => {
	const { data, loading, refetch } = useGetAllButacasQuery({
		fetchPolicy: 'network-only',
		variables: {
			tendido
		}
	})
	const db = data?.GetAllButacas?.data ?? []

	return {
		db,
		loading,
		refetch
	}
}

export default useButacas
