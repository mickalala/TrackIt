import styled from "styled-components"

const AddHabit = styled.div`
   display:flex; 
   height:100%;
   width:100%;
 
h1{

    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #126BA5;
}
button{
    background: #52B6FF;

    color:#FFFFFF;
    border-color:transparent;
    width: 40px;
    height: 35px;
    border-radius:4.64px;
    margin-left:152px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    display:flex;
    align-items:center;
    justify-content:center;
}
`

const HabitsContainer = styled.div`
   margin-top:98px;
   margin-left:17px;

   p{
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;

   }
`

const CardHabit = styled.div`
background-color: lightcyan;
height: 180px;
width: 340px;
border-radius: 5px;
margin-top:20px;
margin-bottom:29px;
position: relative;

display:${(props)=> (props.showCreateHabit)?"": "none"};

input{
    margin-left:19px;
    margin-top:18px;
    height: 45px;
    width: 303px;
    left: 36px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;

    font-family: 'Lexend Deca';
    font-size:19px;
    

}
`
const DaysButtons = styled.div`
margin-left:19px;
margin-top:8px;

button{
    height: 30px;
    width: 30px;
    border-radius: 5px;
    margin-right:4px;
    border: 1px solid #D5D5D5;
    background-color:#FFFFFF;

    color: #DBDBDB;
    font-family: 'Lexend Deca';
    font-size: 19.976px;
}

`
const SaveOrCancel = styled.div`
position:absolute;
right:16px;
bottom:15px;

button{
    height: 35px;
    width: 84px;
    border-radius: 4.636363506317139px;
    border-color:transparent;
    font-family: Lexend Deca;
    font-size: 16px;
}
button:first-child {
    color: #52B6FF;
    background-color:transparent;
}
button:last-child{
    background-color: #52B6FF;
    color:#FFFFFF;
    margin-left:10px;
}

`

export {AddHabit, HabitsContainer, CardHabit, DaysButtons, SaveOrCancel}