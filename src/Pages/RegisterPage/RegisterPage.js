import logo from "../../constants/imgs/Group 8.png"
import RegisterForm from "./style";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { useState } from "react";
import axios from "axios";

import  { ThreeDots } from 'react-loader-spinner';

export default function RegisterPage() {

    const [form, setForm] = useState({ email: "", name: "", image: "", password: "" })
    const [notAble, setNotAble] = useState(false)
    const [load, setLoad] = useState(false)

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function sendForm(e) {
        e.preventDefault()
        setLoad(true)
        axios.post(`${BASE_URL}/auth/sign-up`, form)
            .then(() => {
                navigate("/")
                console.log("deubom")
                setLoad(false)
            })
            .catch(err => {
                alert(err.response.data.message)
                setNotAble(false)
                setLoad(false)
            })
        setNotAble(true)
    }

    console.log(form)

    const navigate = useNavigate();
    return (

        <RegisterForm>
            <img src={logo} />

            {(load === false) && (<><input placeholder="email" type={"email"}
                name="email"
                value={form.email} onChange={handleForm}
                data-test="email-input" />

                <input placeholder="senha" type={"password"}
                    name="password"
                    value={form.password} onChange={handleForm}
                    data-test="password-input" />

                <input placeholder="nome" type={"name"}
                    name="name"
                    value={form.name} onChange={handleForm}
                    data-test="user-name-input" />

                <input placeholder="foto" type={"url"}
                    name="image"
                    value={form.image} onChange={handleForm}
                    data-test="user-image-input" />

                <button onClick={sendForm} disabled={notAble} data-test="signup-btn" >Cadastrar</button></>)

            }

            {(load === true) && (<><input placeholder="email" type={"email"}
                name="email"
                value={form.email} onChange={handleForm}
                data-test="email-input"  disabled/>

                <input placeholder="senha" type={"password"}
                    name="password"
                    value={form.password} onChange={handleForm}
                    data-test="password-input" disabled/>

                <input placeholder="nome" type={"name"}
                    name="name"
                    value={form.name} onChange={handleForm}
                    data-test="user-name-input" disabled/>

                <input placeholder="foto" type={"url"}
                    name="image"
                    value={form.image} onChange={handleForm}
                    data-test="user-image-input" disabled/>

                <button onClick={sendForm} disabled opacity={0.7} data-test="signup-btn" >{<ThreeDots  width={51} color={"#ffffff"} />}</button></>)

            }
            <Link to={"/"} data-test="login-link">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </RegisterForm>


    );
}

