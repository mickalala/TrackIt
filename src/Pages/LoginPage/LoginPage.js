import LoginForm from "./style"
import logo from "../../constants/imgs/Group 8.png"
import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import UserContext from "../../contexts/UserContext"

export default function LoginPage() {

    const { setUserImg, setUserToken}= useContext(UserContext)
    

    const navigate= useNavigate();
    const [form,setForm]=useState({email:"", password:""})
    const [load, setLoad]=useState()

    function handleForm(e){
        setForm({...form, [e.target.name]:e.target.value})
    }

    function logUser(e){
        e.preventDefault()
         axios.post(`${BASE_URL}/auth/login`,form)
         .then((answer)=>{navigate("/habitos")
         setUserImg(answer.data.image)
         setUserToken(answer.data.token)
        console.log(answer.data)})
         .catch(err=>alert(err.response.data.message))
    }

    return (
        <LoginForm>
            <img src={logo} alt={"logo.png"} />
            <input placeholder="email" type={"email"}
            name={"email"}
            value={form.email} onChange={handleForm}/>
            <input placeholder="senha" type={"password"}
            name={"password"}
            value={form.password} onChange={handleForm}/>

            <button onClick={logUser}>Entrar</button>
            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LoginForm>
    )
}


