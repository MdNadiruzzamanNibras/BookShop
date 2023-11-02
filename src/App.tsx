import { onAuthStateChanged } from "firebase/auth"
import MainLayout from "./Layout/MainLayout"
import { useAppDispatch } from "./redux/hooks"
import { auth } from "./firebase"
import { setLoading, setUser } from "./redux/user/userslice"
import { useEffect } from 'react';

function App() {
const dispatch   =useAppDispatch()

  useEffect(() => {
    dispatch(setLoading(true))
    onAuthStateChanged(auth,(user ) => {
    if (user) {
      dispatch(setUser(user.email))
      dispatch(setLoading(false))
    }
      else{ dispatch(setLoading(false))}
  })
   }, [dispatch])
  
  return (
    <>
       <MainLayout/>
    </>
  )
}

export default App
