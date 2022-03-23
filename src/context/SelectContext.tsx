import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  FC,
} from 'react'

import { AuthContextDefaultValues, AuthContextInterface } from './AuthContext'

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

export const SelectProvider: FC = ({ children }) => {
  const [select, setSelect] = useState<AuthContextInterface>(
    AuthContextDefaultValues
  )

  return (
    <>
      <SelectContext.Provider value={{ select, setSelect }}>
        {children}
      </SelectContext.Provider>
    </>
  )
}

export const useSelect = () => {
  const ctxValue = useContext(SelectContext)

  return ctxValue
}
