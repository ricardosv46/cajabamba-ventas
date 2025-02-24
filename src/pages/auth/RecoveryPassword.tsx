import CheckBox from '@components/shared/Checkbox/CheckBox'
import Input from '@components/shared/Input/Input'
import Spinner from '@components/shared/Spinner/Spinner'
import ImageLogin from '../../assets/imgs/login.png'
import { variables } from '@data/variables'
import { IconChevronLeft, IconLogo } from '@icons'
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
          {/* <div className="mb-10 ">
            <IconLogo />
          </div> */}
          <div className="flex items-center gap-4">
            <button
              className="flex justify-center items-center text-white p-1.5 bg-primary-500 rounded-full cursor-pointer "
              onClick={() => router(-1)}
            >
              <IconChevronLeft />
            </button>
            <h1 className="text-2xl font-bold text-left text-slate-800 dark:text-slate-200 lg:text-3xl">
              Recuperar Contraseña
            </h1>
          </div>

          {/* <p className="mb-3 paragraph-2 text-slate-500 dark:text-slate-300">
            Si eres nuevo por aquí regístrate ahora:
            <span className="font-bold"> Crear cuenta</span>
          </p> */}

          <div className="flex flex-col gap-10 py-10">
            <Input
              type="text"
              label="Correo"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched?.email ?? false}
            />

            <button
              type="submit"
              disabled={loadingLogin}
              className="btn btn-solid-primary"
            >
              Recuperar
              {loadingLogin && <Spinner />}
            </button>
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
