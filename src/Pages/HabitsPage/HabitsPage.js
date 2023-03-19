import { AddHabit, HabitsContainer, CardAddHabit, DaysButtonsContainer, SaveOrCancel, CardHabit, Habitdays, Trash } from "./style"
import { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import daysArray from "../../constants/MockDays";
import DaysButtons from "./DaysButtons";

import trash from "../../constants/imgs/Vector.png"

import UserContext from "../../contexts/UserContext";

import Menu from "../../components/Menu";
import Header from "../../components/Header";

export default function HabitsPage() {

    const { userToken } = useContext(UserContext);

    const {days, setDays}= useContext(UserContext)
    const {arrayHabits, setArrayHabits}= useContext(UserContext)

    const [showCreateHabit, setShowCreateHabit] = useState(false)


    const [disableButton, setDisableButton] = useState(false)
    const [createdHabit, setCreatedHabit] = useState("")

    function sendHabit() {
        const body = { name: createdHabit, days: days }
        axios.post(`${BASE_URL}/habits`, body, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        })
            .then((answer) => {
                setCreatedHabit("")
                setDays([])
                const newHabits=[...arrayHabits]
                newHabits.push(answer.data)
                setArrayHabits(newHabits)
            })
            .catch(err => alert(err.response.data.message))
    }

    return (
        <>
            <Header />
            <HabitsContainer>
                <AddHabit>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setShowCreateHabit(true)}>+</button>
                </AddHabit>
                <CardAddHabit showCreateHabit={showCreateHabit}>
                    <input type="text" placeholder={"nome do hábito"}
                        value={createdHabit} onChange={(e) => setCreatedHabit(e.target.value)} />
                    <DaysButtonsContainer>
                        {daysArray.map((d) => <DaysButtons d={d} key={d.numberday}/>)}
                    </DaysButtonsContainer>

                    <SaveOrCancel>
                        <button onClick={() => setShowCreateHabit(false)}>Cancelar</button>
                        <button onClick={sendHabit}>Salvar</button>
                    </SaveOrCancel>
                </CardAddHabit>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                {arrayHabits.map((a)=>
                (<CardHabit key={a.id}>
                    <div>
                        <h1>{a.name}</h1>
                        <Habitdays>
                            {daysArray.map((d) => <button key={d.numberday}
                                disabled={disableButton}>{d.day}</button>)}
                        </Habitdays>
                    </div>
                    <div>
                        <Trash> <img src={trash} /></Trash>
                    </div>
                </CardHabit>))}
            </HabitsContainer>
            <Menu />
        </>
    );
}
