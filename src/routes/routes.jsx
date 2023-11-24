import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Home } from '../pages/Home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />}/>
      <Route path="/register" element={<SignUp />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
  )
}