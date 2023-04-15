import styled from 'styled-components'
import {
    ReactComponent as Bed
} from '../icons/bed.svg'
import {
    ReactComponent as Bath
} from '../icons/bath.svg'
import {
    ReactComponent as Garage
} from '../icons/garage.svg'
import {
    ReactComponent as Square
} from '../icons/squar.svg'

export const Container = styled.div `
position:relative;
width:1349px;
height:600px;
margin: 0 auto;
`

export const Wrapper = styled.div `
position:absolute;
width:492px;
font-size: 44px;
top:50%;
left:50%;
transform: translate(-50%, -50%);
line-height: 48px;
letter-spacing: -0.02em;
color: #FFFFFF;
z-index:5;
`

export const Title = styled.h1 `
font-weight: 700;
font-size: 44px;
line-height: 48px;
letter-spacing: -0.02em;
color: #FFFFFF;
`

export const Text = styled.p `
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`
export const MinTitle = styled.h2 `
font-weight: 600;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.02em;
color: #FFFFFF;
`

export const Button = styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 40px;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
background-color:transparent;
border: 1px solid #FFFFFF;
border-radius: 2px;
`

export const WrapIcon = styled.div `
display:flex;
margin-top:25px;
`

export const IconBed = styled(Bed)
`
with:20px;
margin-right:24px;
`
export const IconBath = styled(Bath)
`with:20px;
margin-right:24px;`
export const IconGarage = styled(Garage)
`with:20px;
margin-right:24px;`
export const IconSquar = styled(Square)
`with:20px;
margin-right:24px;`