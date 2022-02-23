// import react, {
//   useState,
//   createContext,
//   useContext,
//   Dispatch,
//   SetStateAction,
//   useEffect,
//   FC,
// } from 'react'

// export type LoadingContextInterface = {
//   loading: boolean
//   //Dispatch<SetStateAction<string>>    <= string is the type of select
//   setLoading: Dispatch<SetStateAction<boolean>>
//   // setLoading: () => void
// }

// const LoadingContextDefaultValues: LoadingContextInterface = {
//   loading: true,
//   setLoading: () => {},
// }

// export const LoadingContext = createContext<LoadingContextInterface>(
//   LoadingContextDefaultValues
// )
// //[LoadingContextInterface, Dispatch<SetStateAction<LoadingContextInterface>>] | null

// export const LoadingProvider: FC = ({ children }) => {
//   const [loading, setLoading] = useState<boolean>(true)

//   return (
//     <>
//       <LoadingContext.Provider value={{ loading, setLoading }}>
//         {children}
//       </LoadingContext.Provider>
//     </>
//   )
// }
// // export const useAuth = () => useContext(AuthContext)
// export const useLoading = () => useContext(LoadingContext)

// // fetch context => const user = useAuth().currentUser
