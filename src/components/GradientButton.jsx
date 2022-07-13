import { laptop } from '../responsive';
import styled from 'styled-components'

export const GradientButton = ({text}) => {
  return (
    <Button>{text}</Button>
  )
}
const Button = styled.button`
padding: 11px 40px;
font-weight: bold;
border: none;
border-radius: 20px;
color: #fff;
background: linear-gradient(90deg, var(--lime-green) 0%, var(--bright-cyan) 100%); 
transition: 0.3s;
min-width: 150px;
&:hover{
    transition: 0.3s;
    opacity: 0.5;
    cursor: pointer;
}
${laptop({
    padding: "11px 20px"
  })}
`; 
