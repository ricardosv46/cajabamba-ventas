import { useAuthContext } from '@store/auth/AuthState'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AuthRouter from './AuthRouter'
import HomeRouter from './HomeRouter'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const RootRouter = () => {
  const { isAuth } = useAuthContext()

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <PrivateRoute isAuth={isAuth}>
            <HomeRouter />
          </PrivateRoute>
        }
      />

      <Route
        path="auth/*"
        element={
          <PublicRoute isAuth={isAuth}>
            <AuthRouter />
          </PublicRoute>
        }
      />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default RootRouter
