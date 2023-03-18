import styled from "styled-components";

export default function Menu() {
    return (
        <Footer>
            <p>Hábitos</p>
            <p>Histórico</p>
        </Footer>
    )
}

const Footer = styled.footer`
   height: 70px;
   width: 375px;
   left: 0px;
   position: fixed;
   bottom:0px;
   background-color:pink;

`