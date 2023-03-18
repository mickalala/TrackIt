import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginPage from "./Pages/LoginPage/LoginPage"
import RegisterPage from "./Pages/RegisterPage/RegisterPage"
import HabitsPage from "./Pages/HabitsPage/HabitsPage"
import TodayPage from "./Pages/TodayPage/TodayPage"
import HistoryPage from "./Pages/HistoryPage/HistoryPage"

export default function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/cadastro" element={<RegisterPage />} />

        <Route path="/hoje" element={<TodayPage />}/>
        
        <Route path="/habitos" element={<HabitsPage />}/>

        <Route path="/historico" element={<HistoryPage />}/>
      </Routes>
    </BrowserRouter>
   )
}
