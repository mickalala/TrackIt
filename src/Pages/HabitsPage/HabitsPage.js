import {AddHabit, HabitsContainer, CardHabit, DaysButtons, SaveOrCancel} from "./style"
import { useState } from "react";

import Menu from "../../components/Menu";
import Header from "../../components/Header";

export default function HabitsPage() {

    const [showCreateHabit, setShowCreateHabit]= useState(false)

    return (
        <>
            <Header />
            <HabitsContainer>
                <AddHabit>
                    <h1>Meus hábitos</h1>
                    <button onClick={()=>setShowCreateHabit(true)}>+</button>
                </AddHabit>
                <CardHabit showCreateHabit={showCreateHabit}>
                    <input type="text" placeholder={"nome do hábito"} />
                    <DaysButtons>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </DaysButtons>

                    <SaveOrCancel>
                        <button>Cancelar</button>
                        <button>Salvar</button>
                    </SaveOrCancel>
                </CardHabit>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>

            </HabitsContainer>
            <Menu />
        </>
    );
}
