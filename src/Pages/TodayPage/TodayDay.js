import styled from "styled-components"
import dayjs from "dayjs"

export default function TodayDay() {
    let today="";
    let thisMonth="";
    
    const dayNumber=dayjs().day()
    const monthNumber=dayjs().month()
    thisMonth=monthNumber+1;

    if(dayNumber===0){
       today="Domingo"
    }else if(dayNumber===1){
        today="Segunda"
    }else if(dayNumber===2){
        today="Terça"
    }else if(dayNumber===3){
        today="Quarta"
    }else if(dayNumber===4){
        today="Quinta"
    }else if(dayNumber===5){
        today="Sexta"
    }else if(dayNumber===6){
        today="Sábado"
    }


    return (
        <TodayStyled>
            <h1>{today}, {dayjs().$D}/{thisMonth}</h1>
            <p>Nenhum hábito concluído ainda</p>
        </TodayStyled>
    )
}

const TodayStyled = styled.div`
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
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #BABABA;
    }
`