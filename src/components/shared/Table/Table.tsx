import { classNames } from '@utils/classNames'
import { generatedTotal } from '@utils/generatedTotal'
import { Component, Dispatch, ReactElement, ReactNode, useState } from 'react'
import Paginator from '../Paginator/Paginator'
import styles from './table.module.css'
interface State {
	page: number
	numberPaginate: number
}

interface Props {
	actions: ({ id, data }: { id: string; data?: any }) => ReactElement
	rowId: string
	data: any
	className?: string
	th: any
	td: any
	widthPaginator?: boolean
	state?: State
	setState?: Dispatch<React.SetStateAction<State>>
	nTotal?: number
}

const Table = ({ th, td, className, widthPaginator, state, setState, nTotal, data, actions: Action, rowId }: Props) => {
	const paginas = widthPaginator && nTotal && nTotal > 0 ? generatedTotal(nTotal!, state?.numberPaginate!) : []

	return (
		<div>
			<div className={classNames([styles.tableContainer, className])}>
				<table>
					<thead>
						<tr className='dark:border-b-slate-700'>
							{th.map((item: any) => (
								<th key={item} className='text-center'>
									{item}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.map((row: any, i: any) => (
							<tr
								key={i}
								className='dark:bg-transparent dark:text-slate-50 dark:hover:bg-slate-900 dark:border-b-slate-700'>
								{td.map((td: any, index: any) => {
									if (Array.isArray(td)) {
										return (
											<td key={row[td[0]][td[1]]} className='text-center '>
												{row[td[0]][td[1]]}
											</td>
										)
									} else {
										return (
											<td key={index} className='text-center '>
												{row[td]}
											</td>
										)
									}
								})}
								<td className='text-center '>
									<Action id={row[rowId]} data={row} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{widthPaginator && paginas.length > 0 && (
				<Paginator setState={setState!} state={state!} paginas={paginas} />
			)}
		</div>
	)
}

export default Table
