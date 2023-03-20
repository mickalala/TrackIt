import styled from "styled-components";

const LoginForm = styled.form`
display:flex;
flex-direction:column;
align-items: center;
justify-content:space-between;
width:100%;
img{
    margin-top:68px;
    margin-bottom:33px;
}
input{
    border: 1px solid #D4D4D4;
    height: 45px;
    width: 303px;
    border-radius: 5px;
    margin-bottom:6px;

    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    
}
button{
    height: 45px;
    width: 303px;
    border-radius: 4.636363506317139px;
    margin-bottom:25px;
    background-color: #52B6FF;
    border-color:transparent;

    color:#FFFFFF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;

    display: flex;
    justify-content: center;
    align-items: center;
}
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    color: #52B6FF;
}
`
export default LoginForm;