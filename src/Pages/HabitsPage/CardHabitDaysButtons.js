import styled from "styled-components"

export default function CardHabitDaysButtons({d, a}){


    return( a.includes(d.numberday)?
        <ButtonDaySelected key={d.numberday}
        disabled>{d.day}</ButtonDaySelected>:
        <ButtonDayNotSelected key={d.numberday}
        disabled>{d.day}</ButtonDayNotSelected>
    )
}

const ButtonDaySelected= styled.button`

    width: 30px;
    height: 30px;
    margin-right:4px;

    background: #CFCFCF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    
    font-family: 'Lexend Deca';
    font-size: 19.976px;
    color: #FFFFFF;
    
`

const ButtonDayNotSelected= styled.button`

    width: 30px;
    height: 30px;
    margin-right:4px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    
    font-family: 'Lexend Deca';
    font-size: 19.976px;
    color: #DBDBDB;
    
`