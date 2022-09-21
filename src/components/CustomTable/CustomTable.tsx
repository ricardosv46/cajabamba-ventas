import Paginator from '@components/shared/Paginator/Paginator'
import { classNames } from '@utils/classNames'
import { generatedTotal } from '@utils/generatedTotal'
import { Dispatch, ReactElement, useState } from 'react'

import styles from './table.module.css'
interface State {
  page: number
  numberPaginate: number
}

interface Props {
  className?: string
  children: ReactElement | ReactElement[]
  widthPaginator?: boolean
  state?: State
  setState?: Dispatch<React.SetStateAction<State>>
  nTotal?: number
}

const CustomTable = ({ className, widthPaginator, state, setState, nTotal, children }: Props) => {
  const paginas =
    widthPaginator && nTotal && nTotal > 0 ? generatedTotal(nTotal!, state?.numberPaginate!) : []
  return (
    <div className={classNames([styles.tableContainer, className])}>
      <table>{children}</table>
      {widthPaginator && paginas.length > 0 && (
        <Paginator setState={setState!} state={state!} paginas={paginas} />
      )}
    </div>
  )
}

export default CustomTable
