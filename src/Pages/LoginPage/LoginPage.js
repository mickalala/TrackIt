import LoginForm from "./style"
import logo from "../../constants/imgs/Group 8.png"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"

export default function LoginPage() {
    const navigate= useNavigate();
    return (
        <LoginForm>
            <img src={logo} alt={"logo.png"} />
            <input placeholder="email" type={"email"}/>
            <input placeholder="senha" type={"password"}/>

            <button onClick={()=>navigate("/habitos")}>Entrar</button>
            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LoginForm>
    )
}


