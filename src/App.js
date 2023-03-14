import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./Pages/LoginPage/LoginPage"

export default function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
    </Routes>
  </BrowserRouter>
}
