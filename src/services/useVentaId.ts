import { useGetVentaIdQuery, useUpdateAsignacionEntradaVentaMutation } from '../generated/graphql'

interface IUpdateAsiento {
	tipoDocumento: string
	numDocumento: string
	nombres: string
	apellidos: string
	code: string
}

export const useVentaId = (input = { ventaId: 0 }) => {
	const { data, loading, refetch } = useGetVentaIdQuery({
		fetchPolicy: 'network-only',
		variables: {
			...input
		}
	})

	const venta = data?.GetVentaId ?? {}

	const [UpdateAsientoVenta, { loading: loadingUpdateAsiento }] = useUpdateAsignacionEntradaVentaMutation()

	const updateAsientoVenta = async ({ tipoDocumento, numDocumento, nombres, apellidos, code }: IUpdateAsiento) => {
		try {
			const res = await UpdateAsientoVenta({
				variables: {
					input: { asientoId: '', tipoDocumento, numDocumento, nombres, apellidos, code }
				}
			})

			if (res.data?.UpdateAsignacionEntradaVenta) {
				return { ok: true }
			}
			refetch()
		} catch (error: any) {
			return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
		}
	}

	return {
		loading,
		venta,
		refetch,
		updateAsientoVenta,
		loadingUpdateAsiento
	}
}
