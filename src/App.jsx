import React, { useState } from 'react'
import Login from './components/auth/LoginPage'
import { HashRouter, Routes, Route } from 'react-router-dom'
import CreateAccount from './components/auth/Create-Account'
import ForgetPassword from './components/auth/ForgetPassword'
import ResetPassword from './components/auth/ResetPasswrod'

const App = () => {
  // const [theme,setTheme] = useState('light')
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='create-account' element={<CreateAccount />} />
          <Route path='Forgotpassword' element= {<ForgetPassword />}/>
          <Route path='reset-password/:id' element= {<ResetPassword />}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App