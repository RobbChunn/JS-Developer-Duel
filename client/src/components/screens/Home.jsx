import { useState } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'


const InspectButton = styled.button`
     display:flex;
     flex-direction: row;
     align-items: center;
     width: 200px;
     margin-left: 400px;
     margin-right: 40px;
     margin-top: 30px;
     gap: 1rem;
     background-color: #81C54C;
     border: none;
     color: #005E9B;
     padding: 15px 32px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 16px;

     &:hover {
         background-color: red;
         cursor: pointer;
     }

`

const DuelButton  = styled.button`
display:flex;
flex-direction: row;
align-items: center;
width: 200px;
margin-left: 300px;
margin-top: 30px;
gap: 1rem;
background-color: #81C54C;
border: none;
color: #005E9B;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
&:hover {
         background-color: red;
         cursor: pointer;
     }

`

const InspectDescription = styled.p`
display: flex;
align-items: center;
text-align: center;
width: 200px;
margin-left: 400px;
color: #F8AA3E;
background-color: #005E9B;
`

const DuelDescription = styled.p`
display: flex;
align-items: center;
text-align: center;
width: 200px;
margin-left: 940px;
margin-top: -52px;
color: #F8AA3E;
background-color: #005E9B;
`

const Home = () => {



    return (
        <>
        <Link to="/inspect"><InspectButton>Inspect</InspectButton></Link>
        <Link to="/duel"><DuelButton>Duel</DuelButton></Link>
        <InspectDescription>Look up a fellow dev's Github info!</InspectDescription>
        <DuelDescription>Pick two devs to go head to head!</DuelDescription>
        </>
    )
}
export default Home