import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginPage from "./Pages/LoginPage/LoginPage"
import RegisterPage from "./Pages/RegisterPage/RegisterPage"
import HabitsPage from "./Pages/HabitsPage/HabitsPage"

export default function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        
        <Route path="/habitos" element={<HabitsPage />}/>
      
      </Routes>
    </BrowserRouter>
   )
}
