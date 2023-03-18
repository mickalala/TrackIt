import logo from "../../constants/imgs/Group 8.png"
import RegisterForm from "./style";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { useEffect, useState } from "react";
import axios from "axios";


export default function RegisterPage() {

    const [form, setForm]= useState({email: "", name: "", image: "", password: ""})

    function handleForm(e){
        setForm({...form, [e.target.name]:e.target.value})
    }

    function sendForm(e){
      e.preventDefault()
      
        axios.post(`${BASE_URL}/auth/sign-up`,form)
        .then(()=>{navigate("/") 
        console.log("deubom")})
        .catch(err=>alert(err.response.data.message))

    }

    console.log(form)

    const navigate= useNavigate();
    return (
        <RegisterForm>
            <img src={logo} />
            <input placeholder="email" type={"email"} 
            name="email"
            value={form.email} onChange={handleForm}/>

            <input placeholder="senha" type={"password"} 
            name="password"
            value={form.password} onChange={handleForm}/>
        
            <input placeholder="nome" type={"name"} 
            name="name"
            value={form.name} onChange={handleForm}/>

            <input placeholder="foto" type={"url"} 
            name="image"
            value={form.image} onChange={handleForm}/>

            <button onClick={sendForm}>Cadastrar</button>
        </RegisterForm>
    );
}