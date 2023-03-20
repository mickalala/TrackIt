import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styled from "styled-components";
import axios from "axios";
import { useContext, useEffect } from "react";

import UserContext from "../../contexts/UserContext";
import { BASE_URL } from "../../constants/urls";
import GlobalStyle from "../../style/Globalstyle";

export default function HistoryPage() {

    const {userToken}= useContext(UserContext)
    
    useEffect(()=>{
      axios.get(`${BASE_URL}/habits/history/daily`,{
        headers: {
            'Authorization': `Bearer ${userToken}`
        }
}).then((ans)=>console.log(ans.data))
  .catch(err=> alert(err.response.data.mensage))
    },[])
    
    return (
        <>
            <Header />
            <GlobalStyle/>
            <History>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </History>
            <Menu />
        </>
    );
}

const History = styled.div`
    margin-top:98px;
    margin-left:17px;
    h1{
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #126BA5;}
    p{
        margin-top:17px;
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;
    }
`