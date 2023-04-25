import styled from 'styled-components'
import Prev from './imgs/prev.svg'
import Next from './imgs/next.svg'

import {
    ReactComponent as House
} from './imgs/house.svg'
import {
    ReactComponent as Apartment
} from './imgs/apartment.svg'
import {
    ReactComponent as Office
}
from './imgs/business-and-trade.svg'
import {
    ReactComponent as Villa
}
from './imgs/villa.svg'


export const Container = styled.div `
margin-top: 96px;
.category_slider{
    position: relative;
    padding: 32px 0;
    display: flex;
    height: auto;
}
.category-btn{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
    
}
.category-next{
   right: -63px;
    ::before{
       position: absolute;
       width: 7px;
       height: 12px;
       top: 50%;
       background-image: url(${Next});
       transform: translate(-50%, -50%);
       content: '';
   }
   
}
.category-prev{
   left: -63px;
   ::before{
       position: absolute;
       width: 7px;
       height: 12px;
       top: 50%;
       background-image: url(${Prev});
       transform: translate(-50%, -50%);
       content: '';
   }
   
}
`
export const Slide = styled.div `
margin-right: 20px;
:last-child{
    margin-right: 0;
}
`
export const Title = styled.div `
margin-bottom: 8px;
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
text-align: center;
letter-spacing: -0.02em;
color: #0D263B;
`
export const Discription = styled.p `
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
`

export const Wrapper = styled.div `
position: relative;
`
export const Image = styled.img `

`

export const Text = styled.div `
position: absolute;
text-align: center;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: #fff;
`
export const TextDisc = styled.p `
font-style: normal;
margin-top: 24px;
font-weight: 600;
font-size: 18px;
line-height: 28px;
`
export const HouseIcon = styled(House)
``
export const ApartmentIcon = styled(Apartment)
``
export const OfficeIcon = styled(Office)
``
export const VillaIcon = styled(Villa)
``