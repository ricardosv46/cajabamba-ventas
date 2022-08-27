import LoginPage from '@pages/auth/LoginPage'
import RecoveryPassword from '@pages/auth/RecoveryPassword'
import { Route, Routes } from 'react-router-dom'

const AuthRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="change-password" element={<RecoveryPassword />} />
      </Routes>
    </div>
  )
}

export default AuthRouter
