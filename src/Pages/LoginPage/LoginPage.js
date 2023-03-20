import LoginForm from "./style"
import logo from "../../constants/imgs/Group 8.png"
import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import UserContext from "../../contexts/UserContext"

import { ThreeDots } from 'react-loader-spinner';

export default function LoginPage() {

    const { setUserImg, setUserToken } = useContext(UserContext)


    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" })
    const [load, setLoad] = useState(false)

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function logUser(e) {
        e.preventDefault()
        setLoad(true)
        axios.post(`${BASE_URL}/auth/login`, form)
            .then((answer) => {
                setLoad(false)
                navigate("/hoje")
                setUserImg(answer.data.image)
                setUserToken(answer.data.token)
                console.log(answer.data)
            })
            .catch(err => {
                setLoad(false)
                alert(err.response.data.message)
                setForm({ email: "", password: "" })
            })

    }

    return (
        <LoginForm>
            <img src={logo} alt={"logo.png"} />

            {(load === false) &&
                (<><input placeholder="email" type={"email"}
                    name={"email"}
                    value={form.email} onChange={handleForm} data-test="email-input" />
                    <input placeholder="senha" type={"password"}
                        name={"password"}
                        value={form.password} onChange={handleForm} data-test="password-input" />

                    <button onClick={logUser} data-test="login-btn">Entrar</button></>)
            }
            {(load === true) &&
                (<><input disabled placeholder="email" type={"email"}
                    name={"email"}
                    value={form.email} onChange={handleForm} data-test="email-input" />
                    <input  disabled placeholder="senha" type={"password"}
                        name={"password"}
                        value={form.password} onChange={handleForm} data-test="password-input" />

                    <button disabled opacity={0.7} data-test="login-btn">{<ThreeDots  width={51} color={"#ffffff"} />}</button></>)
            }

            <Link to={"/cadastro"} data-test="signup-link">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LoginForm>
    )
}


