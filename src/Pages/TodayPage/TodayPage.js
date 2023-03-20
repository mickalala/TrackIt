import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styled from "styled-components";

import check from "../../constants/imgs/Group.png"
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";

import { BASE_URL } from "../../constants/urls";
import axios from "axios";

import TodayDay from "./TodayDay";

export default function TodayPage() {

    const {  userToken } = useContext(UserContext)
    const {percentage, setPercentage}= useContext(UserContext)
    const [currentDayHabit, setCurrentDayhabit]= useState([])

    const [markDoneGreen, setMarkDone]= useState(false)

    useEffect(()=>{
        axios.get(`${BASE_URL}/habits/today`,{
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
        })
        .then((ans)=> setCurrentDayhabit(ans.data)   
        )
        .catch((err)=> alert(err.response.data.mensage))
    },[currentDayHabit])

    useEffect(() => {
        const habitsDone = currentDayHabit.filter(currentDayHabit=> currentDayHabit.done === true);
        if(currentDayHabit.length){
            const newPercentage = ((habitsDone.length/currentDayHabit.length) *100)
            
            setPercentage(newPercentage.toFixed(0))
        }
       

    }, [currentDayHabit])

console.log(percentage)

    function markDone(id, aDone){
        let checkOrnot="check"
        if(aDone==true){
            checkOrnot="uncheck"
        }
        const body={};
          axios.post(`${BASE_URL}/habits/${id}/${checkOrnot} `, body,{
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
    }).then(()=>setMarkDone(true))
    .catch(err=>alert(err.response.data.mensage))
    }

    return (
        <>
            <Header />
            <TodayDay/>
            <TodayContainer>
            {currentDayHabit.map((array)=>(
            <CardToday key={array.id}>
                <div>
                    <h1>{array.name}</h1>
                    <p>Sequência atual: {array.currentSequence}</p>
                    <p>Seu recorde: {array.highestSequence}</p>
                </div>
                <Check markDoneGreen={array.done} onClick={()=>(markDone(array.id, array.done))}>
                    <img src={check} />
                </Check>
            </CardToday>))}
            <Menu />
            </TodayContainer>
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
background-color:${(props)=>(props.markDoneGreen)?" #8FC549":"#EBEBEB"};
border: 1px solid #E7E7E7;
top:13px;
right:13px;
position:absolute;

 `

 const TodayContainer=styled.div`
 margin-bottom:90px;
 `