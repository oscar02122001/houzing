import styled from "styled-components"
import {
    ReactComponent as Sms
} from "./imgs/sms.svg"
import {
    ReactComponent as Home
} from "./imgs/home.svg"
import {
    ReactComponent as Phone
} from "./imgs/phone.svg"



export const Container = styled.div `

`

export const Title = styled.h3 `
font-size: 28px;
line-height: 36px;
text-align: center;
letter-spacing: -0.02em;
color: #0D263B;
`



export const Discription = styled.p `
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
`

export const CardsWrap = styled.div `

`

export const SmsIcon = styled(Sms)`
width: 45px;
height: 49px;

`
export const HomeIcon = styled(Home)`
height:49px;
width: 50px;
`
export const PhoneIcon = styled(Phone)`
height: 50px;
width: 37.01171875px;
`