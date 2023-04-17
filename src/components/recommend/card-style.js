import styled from 'styled-components'
import {
    ReactComponent as BathCard
} from './img/bathCard.svg'
import {
    ReactComponent as BadCard
} from './img/bedCard.svg'
import {
    ReactComponent as GarageCard
} from './img/garageCard.svg'
import {
    ReactComponent as SquarCard
} from './img/squarCard.svg'

import {
    ReactComponent as Top
} from './img/topdown.svg'
import {
    ReactComponent as Heart
} from './img/heart.svg'






export const Wrapper = styled.div `
position: relative;
 width:calc((100% - 40px) /3);
margin-right: 20px;
border-radius: 3px;
border: 1px solid #E6E9EC;
text-align: left;
cursor: pointer;

 :hover {
  transform: scale(1.03);
  transition: 0.4 s all;

 }
`
export const ImgWrap = styled.div `
position: relative;
`
export const ImageUser = styled.img `
position:absolute;
bottom: -17px;
right: 22px;
`
export const Feature = styled.button `
position: absolute;
top: 20px;
left: 20px;
display: flex;
font-size: 10px;
flex-direction: row;
align-items: flex-start;
padding: 5px 12px;
background: #0061DF;
border-radius: 3px;
border: none;
color: #fff;
z-index: 5;

:hover{
    background-color: #fff;
    transition: 0.2s ease all;
    color: #333;
}
`

export const Sale = styled(Feature)
`
left:auto;
right: 20px;
background-color: #0D263B;
`

export const Textwrap = styled.div `
padding: 24px 20px 8px 20px;
`
export const Title = styled.h1 `
font-size: 16px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0em;
`

export const Disc = styled.p `
/* font-family: Montserrat; */
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
color: #696969;
`

export const IconsWrap = styled.div `
flex-direction: row;
/* justify-content: space-between; */
`
export const IconWrap = styled.div `
display: flex;
flex-direction: column;
align-items: center;
margin-right: 35px;
:last-child{
    margin-right: 0;
}
`
export const OldPrice = styled.p `
margin: 0;
font-weight: 400;
font-size: 12px;
line-height: 20px;
text-decoration-line: line-through;
color: #696969;

`
export const Price = styled.p `
margin: 0;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #0D263B;
`
export const ButtonIcons = styled.div `
position: absolute;
padding: 11px 0;
right: 20px;
bottom: 12px;
z-index: 5;
`
export const Bath = styled(BathCard)
``
export const Bed = styled(BadCard)
``
export const Garage = styled(GarageCard)
``
export const Squar = styled(SquarCard)
``

export const ResizeIcon = styled(Top)
`
margin-right: 30px;
`
export const HeartIcon = styled(Heart)
`
`