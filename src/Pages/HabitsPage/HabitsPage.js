import { AddHabit, HabitsContainer, CardHabit, DaysButtons, SaveOrCancel } from "./style"
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

import Menu from "../../components/Menu";
import Header from "../../components/Header";

export default function HabitsPage() {

    const [showCreateHabit, setShowCreateHabit] = useState(false)
    const [days, setDays] = useState([]);

    const [disableButton, setDisableButton] = useState(false)
    const [createdHabit, setCreatedHabit]= useState("")

    function chosingDays(weekday) {
        if (days.includes(weekday)) {
            const filteredList = days.filter((d) => d !== weekday)
            setDays(filteredList)
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
    }

    function sendHabit(){
        const body={name:createdHabit, days:days}
      axios.post(`${BASE_URL}/habits`,body)
      .then(()=>console.log("deu"))
      .catch(err=> alert(err.response.data.message))
    }

    console.log(days);
    return (
        <>
            <Header />
            <HabitsContainer>
                <AddHabit>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setShowCreateHabit(true)}>+</button>
                </AddHabit>
                <CardHabit showCreateHabit={showCreateHabit}>
                    <input type="text" placeholder={"nome do hábito"} 
                    value={createdHabit} onChange={(e)=> setCreatedHabit(e.target.value)}/>
                    <DaysButtons>
                        <button onClick={() => chosingDays(1)} disabled={disableButton}>D</button>
                        <button onClick={() => chosingDays(2)} disabled={disableButton}>S</button>
                        <button onClick={() => chosingDays(3)} disabled={disableButton}>T</button>
                        <button onClick={() => chosingDays(4)} disabled={disableButton}>Q</button>
                        <button onClick={() => chosingDays(5)} disabled={disableButton}>Q</button>
                        <button onClick={() => chosingDays(6)} disabled={disableButton}>S</button>
                        <button onClick={() => chosingDays(7)} disabled={disableButton}>S</button>
                    </DaysButtons>

                    <SaveOrCancel>
                        <button onClick={() => setShowCreateHabit(false)}>Cancelar</button>
                        <button onClick={sendHabit }>Salvar</button>
                    </SaveOrCancel>
                </CardHabit>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>

            </HabitsContainer>
            <Menu />
        </>
    );
}
