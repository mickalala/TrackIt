import styled from "styled-components"
import { useContext, useState } from "react"
import UserContext from "../../contexts/UserContext"

export default function DaysButtons({d}) {

    const [clicked, setClicked] = useState(0)
    const {days, setDays}=useContext(UserContext)

    function chosingDays(weekday) {
        if (days.includes(weekday)) {
            const filteredList = days.filter((d) => d !== weekday)
            setDays(filteredList)
            setClicked(0)
            return
        }

        const newdays = [...days]
        if (weekday === 1) {
            newdays.push(1)
        } else if (weekday === 2) {
            newdays.push(2)
        } else if (weekday === 3) {
            newdays.push(3)
        } else if (weekday === 4) {
            newdays.push(4)
        } else if (weekday === 5) {
            newdays.push(5)
        } else if (weekday === 6) {
            newdays.push(6)
        } else if (weekday === 7) {
            newdays.push(7)
        }
        setDays(newdays)
        setClicked(1)
    }

    return (
        <DayWeek onClick={() => chosingDays(d.numberday)}
           key={d.numberday} clicked={clicked} days={days}>
            {d.day}
        </DayWeek>
    )
}


const DayWeek= styled.button`
    height: 30px;
    width: 30px;
    border-radius: 5px;
    margin-right:4px;
    border: 1px solid #D5D5D5;
    background-color:${(props)=>(props.clicked===1)?"#CFCFCF":"#FFFFFF"};

    color: ${(props)=>(props.clicked===1)?"#FFFFFF":"#DBDBDB"};
    font-family: 'Lexend Deca';
    font-size: 19.976px;
`