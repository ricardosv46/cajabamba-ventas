import CheckBox from '@components/shared/Checkbox/CheckBox'
import Input from '@components/shared/Input/Input'
import Spinner from '@components/shared/Spinner/Spinner'
import ImageLogin from '../../assets/imgs/login.png'
import { variables } from '@data/variables'
import { IconLogo } from '@icons'
import { useLogin } from '@services/useLogin'
import { useAuthContext } from '@store/auth/AuthState'
import { validateLogin } from '@validation/validateLogin'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ToggleTheme from '@components/shared/ToggleTheme/ToggleTheme'

const LoginPage = () => {
  const { loginUsuario, loadingLogin } = useLogin()
  const { login } = useAuthContext()
  const router = useNavigate()
  const { titleLoginTop, titleLoginBottom } = variables
  const [isChecked, setIsChecked] = useState(false)

  const onSubmit = () => {
    loginUsuario({
      email: values?.email,
      password: values?.password
    }).then((res) => {
      if (res?.ok) {
        login(res?.data!)
      } else {
        toast.error('Email o Password incorrecto.', {
          theme: 'colored',
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    })
  }

  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormik({
      validate: validateLogin,
      onSubmit,
      initialValues: { email: '', password: '' }
    })

  return (
    <div className="relative flex justify-center h-screen px-4 overflow-hidden md:px-0">
      <div className="flex flex-col items-center justify-center w-full px-6 md:w-1/2 md:mx-auto md:px-8">
        <form onSubmit={handleSubmit} className="w-full max-w-sm py-8 ">
          <div className="w-48 mb-10">
            <IconLogo />
          </div>
          <h1 className="text-2xl font-bold text-left  text-slate-800 dark:text-slate-200 lg:text-3xl">
            Inicia sesión
          </h1>
          {/* <p className="mb-3 paragraph-2 text-slate-500 dark:text-slate-300">
            Si eres nuevo por aquí regístrate ahora:
            <span className="font-bold"> Crear cuenta</span>
          </p> */}

          <div className="flex flex-col gap-10 py-10">
            <Input
              type="text"
              label="Usuario"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched?.email ?? false}
            />
            <Input
              type="password"
              label="Contraseña"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched?.password ?? false}
            />
            <button
              type="submit"
              disabled={loadingLogin}
              className="btn btn-solid-primary"
            >
              Inicia sesión
              {loadingLogin && <Spinner />}
            </button>

            <div className="flex flex-col justify-between gap-y-3 sm:flex-row">
              <CheckBox
                label="Recordarme"
                value={isChecked}
                onClick={() => setIsChecked(!isChecked)}
              />
              <p
                className="cursor-pointer text-slate-500 dark:text-slate-300 hover:text-primary-500 hover:underline"
                // onClick={navigate('./recuperar', { replace: true })!}
                onClick={() => {
                  router('/auth/change-password')
                }}
              >
                Recuperar contraseña
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="relative hidden h-full md:block md:w-1/2">
        <img className="object-cover w-full h-full" src={ImageLogin} alt="" />
        <div className="bg-[#0E1C3A] absolute opacity-70 inset-0"></div>
        <div className="absolute top-0 flex flex-col items-start justify-center w-full h-full p-16 font-bold">
          <h2 className="text-6xl font-bold text-white "> {titleLoginTop}</h2>
          <h2 className="text-6xl font-bold text-primary-500">
            {titleLoginBottom}
          </h2>
        </div>
      </div>
      <ToggleTheme className="absolute top-5 left-5" />
    </div>
  )
}

export default LoginPage
