import React, { useEffect } from 'react'

import SwitchDark from '../src/utils/SwitchDark'
import { useRouter } from 'next/router'
import {
  Layout,
  LoginContainer,
  LoginFormContainer,
} from '../src/components/login'
import {
  TextGoogleLogin,
  TextHeader,
  TextNeedAnAccount,
  TextSm,
} from '../src/utils/form/text'
import { Input1 } from '../src/utils/form/input'
import { ButtonSignIn } from '../src/utils/form/button'

const login = () => {
  const router = useRouter()

  return (
    <Layout>
      <LoginContainer>
        <LoginFormContainer />
      </LoginContainer>
      <SwitchDark />
    </Layout>
  )
}

export default login
