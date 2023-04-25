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
background-color: #F5F7FC;;

`
export const Wrapper = styled.div`
padding: 48px 0;
`
export const Title = styled.h3 `
font-size: 28px;
line-height: 36px;
text-align: center;
letter-spacing: -0.02em;
color: #0D263B;
`

export const CardTitle = styled.div `
margin-top: 24px;
margin-bottom: 8px;
font-weight: 600;
font-size: 18px;
line-height: 28px;
text-align: center;
color: #0D263B;
`



export const Discription = styled.p `
font-weight: 400;
font-size: 16px;
margin: 0;
line-height: 24px;
color: #696969;

.top-disc{
    margin-bottom: 0;
}
`
export const CardsContainer = styled.div `
display: flex;
margin-top: 40px;
`
export const CardsWrap = styled.div `
width: calc((100% - 160px) / 3);
text-align: center;
margin-right: 80px;

:last-of-type{
    margin-right: 0;
}
`

export const SmsIcon = styled(Sms)
`
width: 45px;
height: 49px;

`
export const HomeIcon = styled(Home)
`
height:49px;
width: 50px;
`
export const PhoneIcon = styled(Phone)
`
height: 50px;
width: 37px;
`