import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginPage from "./Pages/LoginPage/LoginPage"
import RegisterPage from "./Pages/RegisterPage/RegisterPage"
import HabitsPage from "./Pages/HabitsPage/HabitsPage"
import TodayPage from "./Pages/TodayPage/TodayPage"
import HistoryPage from "./Pages/HistoryPage/HistoryPage"
import Globalstyle from "./style/Globalstyle"

import { useState } from "react"

import UserContext from "./contexts/UserContext"

export default function App() {

  const [userImg, setUserImg]= useState("")
  const [userToken, setUserToken]= useState("")

  const [arrayHabits, setArrayHabits]= useState([])
  const [days, setDays] = useState([]);

  return (
    <UserContext.Provider value={{userImg,setUserImg, userToken, setUserToken, days, setDays, arrayHabits, setArrayHabits}}>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="/cadastro" element={<RegisterPage />} />

          <Route path="/hoje" element={<TodayPage />} />

          <Route path="/habitos" element={<HabitsPage />} />

          <Route path="/historico" element={<HistoryPage />} />
        </Routes>

      </BrowserRouter>
    </UserContext.Provider>
  )
}
