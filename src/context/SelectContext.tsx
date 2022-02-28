import react, {
  useState,
  useEffect,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  FC,
} from 'react'
import { useRouter } from 'next/router'

import { colorPalette, randomProperty } from '../utils/color'
import {
  AuthContextDefaultValues,
  AuthContextInterface,
  useAuth,
} from './AuthContext'

export type SelectContextInterface = {
  select: AuthContextInterface
  setSelect: Dispatch<SetStateAction<AuthContextInterface>>
}

const selectContextDefaultValues: SelectContextInterface = {
  select: AuthContextDefaultValues,
  setSelect: () => {},
}

export const SelectContext = createContext<SelectContextInterface>(
  selectContextDefaultValues
)
//[selectContextInterface, Dispatch<SetStateAction<selectContextInterface>>] | null

export const SelectProvider: FC = ({ children }) => {
  const [select, setSelect] = useState<AuthContextInterface>(
    AuthContextDefaultValues
  )

  // const toggleSelect = (select: react.SetStateAction<string>) => {
  //   setSelect(select)
  // }

  return (
    <>
      <SelectContext.Provider value={{ select, setSelect }}>
        {children}
      </SelectContext.Provider>
    </>
  )
}
// export const useAuth = () => useContext(AuthContext)
export const useSelect = () => {
  const ctxValue = useContext(SelectContext)

  return ctxValue
}
// fetch context => const user = useAuth().currentUser
