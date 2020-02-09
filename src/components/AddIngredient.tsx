import React from 'react'
import styled from 'styled-components'
import { AddCircle } from 'grommet-icons'
import { Active } from './Ingredient'

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  font-size: 16px;
  color: #9FAFC9;
  letter-spacing: 0.39px;
  width: 276px;
  height: 116px;
  padding: 12px 24px 12px 12px;

  svg {
    fill: #9FAFC9;
    stroke: #9FAFC9;
  }

  &:hover {
    ${Active}
  }
`

const Ingredient: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <Wrapper onClick={onClick}>
    <AddCircle size='large'/>
    <span>Add a new ingredient</span>
  </Wrapper>
)

export default Ingredient
