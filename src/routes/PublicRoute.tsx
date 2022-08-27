import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  isAuth: boolean
  children: ReactElement
}

const PublicRoute = ({ isAuth, children }: Props) => {
  return !isAuth ? children : <Navigate to="/" />
}

export default PublicRoute
