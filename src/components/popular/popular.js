import styled from "styled-components"


export const Container = styled.div `
position: relative;
margin-top: 96px;


::before{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 571px;
    background-color: rgba(0, 0, 0, 0.65);;
    content: '';
}
`

export const Image = styled.img `
width: 100%;
height: 571px;
margin: 0 auto;
`

export const Wrapper = styled.div `
position: absolute;
width: 566px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`
export const Title = styled.h3 `
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
text-align: center;
letter-spacing: -0.02em;
color: #FFFFFF;
`

export const Button = styled.button `
padding: 12px 51px;
margin-top: 48px;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
border: none;
color: #FFF;
background: #0061DF;
border-radius: 2px;
`