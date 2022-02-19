import React from 'react'
import {
  RegisterFormContainer,
  Layout,
  RegisterContainer,
} from '../src/components/register'

import SwitchDark from '../src/utils/SwitchDark'

const register = () => {
  return (
    <Layout>
      <RegisterContainer>
        <RegisterFormContainer />
      </RegisterContainer>
      <SwitchDark />
    </Layout>
  )
}

export default register
