import { useGetFeriaQuery } from '@generated/graphql'

const useFeria = () => {
	const { data, loading, refetch } = useGetFeriaQuery({
		fetchPolicy: 'network-only'
	})
	const abono = data?.GetFeria ?? {}

	return {
		abono,
		loading,
		refetch
	}
}

export default useFeria
