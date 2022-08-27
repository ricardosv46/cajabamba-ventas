import { useLoginMutation } from '@generated/graphql'

interface IUseLogin {
  email: string
  password: string
}
interface IRecoveryPasword {
  email: string
}

export const useLogin = () => {
  const [LoginUsuario, { loading: loadingLogin }] = useLoginMutation()

  const loginUsuario = async ({ email, password }: IUseLogin) => {
    try {
      const res = await LoginUsuario({
        variables: {
          input: {
            email,
            password
          }
        }
      })
      if (res.data?.Login?.apiToken) {
        localStorage.setItem('token', res.data?.Login?.apiToken)
        localStorage.setItem('user', JSON.stringify(res.data?.Login))
        return { ok: true, data: res.data?.Login }
      }
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }
  }

  // const [RecoveryPassword, { loading: loadingRecovery }] =
  //   useRecuperarContrasenaMutation()

  // const recoveryPassword = async ({ email }: IRecoveryPasword) => {
  //   try {
  //     const res = await RecoveryPassword({
  //       variables: {
  //         input: {
  //           email
  //         }
  //       }
  //     })
  //     if (res.data?.RecuperarContrasena === 'CONTRASENA_RESTABLECIDA') {
  //       return { ok: true }
  //     } else {
  //       return { ok: false, error: res.data?.RecuperarContrasena }
  //     }
  //   } catch (error: any) {
  //     return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
  //   }
  // }

  return {
    loadingLogin,
    loginUsuario
  }
}
