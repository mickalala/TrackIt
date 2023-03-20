import { AddHabit, HabitsContainer, CardAddHabit, DaysButtonsContainer, SaveOrCancel, CardHabit, Habitdays, Trash } from "./style"
import CardHabitDaysButtons from "./CardHabitDaysButtons";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import daysArray from "../../constants/MockDays";
import DaysButtons from "./DaysButtons";
import GlobalStyle from "../../style/Globalstyle";

import trash from "../../constants/imgs/Vector.png"

import UserContext from "../../contexts/UserContext";

import Menu from "../../components/Menu";
import Header from "../../components/Header";

export default function HabitsPage() {

    const { userToken } = useContext(UserContext);

    const { days, setDays } = useContext(UserContext)
    const { arrayHabits, setArrayHabits } = useContext(UserContext)

    const [showCreateHabit, setShowCreateHabit] = useState(false)

    const [createdHabit, setCreatedHabit] = useState("")

    useEffect(() => {
        axios.get(`${BASE_URL}/habits`, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        }).then((answer) => {
            setArrayHabits(answer.data)
        })
            .catch((err) => alert(err.response.data.mensage))

    }, [arrayHabits])

    function sendHabit() {
        if(days.length===0){
           return alert("voce não colocou os dias ein.Volte.")
        }
        const body = { name: createdHabit, days: days }
        axios.post(`${BASE_URL}/habits`, body, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        })
            .then(() => {
                setCreatedHabit("")
                setDays([])
                setShowCreateHabit(false)
            })
            .catch(err => alert(err.response.data.message))
    }

    function deleteCard(id) {
        if (window.confirm("Tem certeza que quer apagar esse hábito?") === true) {
            console.log(id)
            axios.delete(`${BASE_URL}/habits/${id}`, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            }).then(() => {
                setArrayHabits(arrayHabits.filter(post => post.id !== id))

            })
                .catch(err => {
                    console.log(err);
                    alert("Você inseriu dados inválidos")
                })
        };
    }

    return (
        <>
            <Header />
            <GlobalStyle/>
            <HabitsContainer>
                <AddHabit>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setShowCreateHabit(true)}>+</button>
                </AddHabit>
                <CardAddHabit showCreateHabit={showCreateHabit} data-test="habit-create-container" >
                    <input type="text" placeholder={"nome do hábito"}
                        value={createdHabit} onChange={(e) => setCreatedHabit(e.target.value)} data-test="habit-name-input"/>
                    <DaysButtonsContainer>
                        {daysArray.map((d) => <DaysButtons d={d} key={d.numberday} />)}
                    </DaysButtonsContainer>

                    <SaveOrCancel>
                        <button onClick={() => setShowCreateHabit(false)} data-test="habit-create-cancel-btn">Cancelar</button>
                        <button onClick={sendHabit} data-test="habit-create-save-btn" >Salvar</button>
                    </SaveOrCancel>
                </CardAddHabit>
                {(arrayHabits.length == 0) && (<p >Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>)}
                {arrayHabits.map((a) =>
                (<CardHabit key={a.id} data-test="habit-container" >
                    <div>
                        <h1 data-test="habit-name">{a.name}</h1>
                        <Habitdays>
                            {daysArray.map((d) => <CardHabitDaysButtons d={d} a={a.days} key={d.numberday} />)}
                        </Habitdays>
                    </div>
                    <div>
                        <Trash onClick={() => deleteCard(a.id)} data-test="habit-delete-btn"> <img src={trash} /></Trash>
                    </div>
                </CardHabit>))}
            </HabitsContainer>
            <Menu />
        </>
    );
}
