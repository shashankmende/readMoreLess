// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const TextContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: black;
`
export const Para = styled.p`
  font-family: 'Roboto';
  color: #334155;
`

export const Image = styled.img`
  width: 60%;
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  line-height: 2;
`

export const Button = styled.button`
  background-color: #1f81ff;
  padding: 10px;
  border-radius: 8px;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  width: 250px;
`
