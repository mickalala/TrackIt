import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styled from "styled-components";

import check from "../../constants/imgs/Group.png"
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";



import TodayDay from "./TodayDay";

export default function TodayPage() {

    const { arrayHabits } = useContext(UserContext)

    return (
        <>
            <Header />
            <TodayDay/>
 
            {arrayHabits.map((array)=>(
            <CardToday key={array.id}>
                <div>
                    <h1>{array.name}</h1>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                </div>
                <Check>
                    <img src={check} />
                </Check>
            </CardToday>))}
            <Menu />
        </>
    );
}


const CardToday = styled.div`
margin-left:17px;
margin-top:28px;
width: 340px;
height: 94px;

background: lightseagreen;
border-radius: 5px;
display:flex;
position:relative;
div{
    margin-top:13px;
}
h1{
    color: #666666;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    margin-left:15px;
    margin-top:13px;
    margin-bottom:7px;
}
p{
    margin-left:15px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    color: #666666;
}


`
const Check = styled.button`
 width: 69px;
height: 69px;
border-radius:5px;
background-color:#EBEBEB;
border: 1px solid #E7E7E7;
top:13px;
right:13px;
position:absolute;

 `