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
position: relative;
overflow: hidden;
::before {
    position: absolute;
    display: flex;
    width: 100vw;
    height: 571px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
    content: ' ';
}
`
export const Slider = styled.div `
position: relative;
height: 571px;
`

export const Next = styled.button `
position: absolute;
right: 0px;
width: 45px;
height: 45px;
background-color: rgba(248,248,248, 0.2);
border-radius: 50%;
z-index: 2;
border: none;
`

export const Prev = styled(Next)
`
left: 0;
`



export const Image = styled.img `
position: absolute;
display: flex;
width: 100vw;
height: 100vh;
justify-content: center;
z-index: -1;
`

export const Wrapper = styled.div `
width:492px;
font-size: 44px;
margin: 0 auto;
line-height: 48px;
letter-spacing: -0.02em;
color: #FFFFFF;

.icon-wrap{
    display: flex;
    justify-content: center;
    flex-direction: column;
   align-items: center;
   margin-right: 24px;
   :last-child{
       margin-right: 0;
   }
}
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
export const Price = styled(MinTitle)
`
margin-top: 24px;
`

export const Button = styled.button `
flex-direction: row;
margin-top: 48px;
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
width:20px;
margin:0;

`
export const IconBath = styled(Bath)
`width:20px;
margin: 0;
`
export const IconGarage = styled(Garage)
`width:20px;
margin: 0;
`
export const IconSquar = styled(Square)
`width:20px;
margin: 0;
`