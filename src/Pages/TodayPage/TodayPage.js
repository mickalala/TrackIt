import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styled from "styled-components";
import dayjs from "dayjs";

import check from "../../constants/imgs/Group.png"


export default function TodayPage() {

    console.log(dayjs().$d)
    console.log(Date())
    return (
        <>
            <Header />
            <TodayStyled>
                <h1>Segunda, 17/05</h1>
                <p>Nenhum hábito concluído ainda</p>
            </TodayStyled>
            <CardToday>
                <div>
                <h1>Ler 1 capítulo de livro</h1>
                <p>Sequência atual: 3 dias</p>
                <p>Seu recorde: 5 dias</p>
                </div>
              <Check>
                <img src={check}/>
              </Check>
            </CardToday>
            <Menu />
        </>
    );
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

const CardToday= styled.div`
margin-left:17px;
margin-top:28px;
width: 340px;
height: 94px;
left: 18px;
top: 177px;

background: lightseagreen;
border-radius: 5px;
display:flex;
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
 const Check =styled.button`
 width: 69px;
height: 69px;
left: 276px;
border-radius:5px;
background-color:#EBEBEB;
border: 1px solid #E7E7E7;
margin-left:35px;
margin-top:13px;
 `