import styled from "styled-components";
import { Link } from "react-router-dom";

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Menu() {

    const percentage = 66;


    return (
        <MenuStyle>
            <Footer>
                <Link to={"/habitos"} >
                    <p>Hábitos</p>
                </Link>

                <Link to={"/historico"}>
                    <p>Histórico</p>
                </Link>
            </Footer>
            <div>
                <Link to={"/hoje"}>
                    <CircularProgressbar value={percentage} text={"Hoje"} 
                      background
                      backgroundPadding={6}
                      styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                      })}/>;
                </Link>
            </div>
        </MenuStyle>
    )
}

const Footer = styled.footer`
   height: 70px;
   width: 375px;
   left: 0px;
   position: fixed;
   bottom:0px;
   background-color:pink;

   font-family: Lexend Deca;
   font-size: 18px;
   color:#52B6FF;
   display:flex;
   justify-content:space-between;
   align-items:center;
   p{
    margin-left:36px;
    margin-right:31px;
    color:#52B6FF;

   }
   a{
        text-decoration:none;
   }

`
const MenuStyle = styled.div`
div{
    position:fixed;
    height: 91px;
    width: 91px;
    bottom:6px;
    left:142px;

    }
`
