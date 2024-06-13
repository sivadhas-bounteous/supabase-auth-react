import { useState } from 'react'
import Signup from './components/Signup';
import Signin from './components/Signin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

function App() {
  const [page, setPage] = useState<string>('signup')

  return (
    <>
      {(page == 'signup') ? <Signup setPage={setPage}></Signup> : <Signin setPage={setPage}></Signin>}
      <ToastContainer />
    </>
  )
}

export default App
