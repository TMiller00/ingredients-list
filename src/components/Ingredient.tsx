import React from 'react'
import styled, { css } from 'styled-components'
import { RadialSelected, Next, FormClose } from 'grommet-icons'

type Handlers = {
  onClick: () => void
  onDelete: () => void
  active: boolean
}

export type Props = {
  ingredient: string
  dosage: string
  origin: string
}

const FormCloseWrapper = styled.div`
  display: none;
  position: absolute;
  top: 8px;
  right: 8px;
`

const Dosage = styled.div`
  font-size: 22px;
  color: #9FAFC9;
  letter-spacing: 0.53px;
`

export const Active = css`
  background-color: #142B6F;
  color: white;

  svg {
    fill: white;
    stroke: white;
  }

  ${Dosage} {
    color: white;
  }

  ${FormCloseWrapper} {
    display: block;
  }
`

const Wrapper = styled.div<{ active: boolean }>`
  box-sizing: border-box;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: #142B6F;
  width: 276px;
  height: 116px;
  padding: 12px 24px 12px 12px;
  border-bottom: 1px solid #142B6F;

  svg {
    fill: #142B6F;
    stroke: #142B6F;
  }

  &:hover {
    ${Active}
  }

  ${props => props.active && Active}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const Title = styled.div`
  font-size: 30px;
  letter-spacing: 0;
  line-height: 32px;
`

const Origin = styled.div`
  display: flex;
  align-items: center;
`

const OriginText = styled.div`
  font-size: 18px;
  letter-spacing: 0;
  margin-left: 8px;
`

const Ingredient: React.FC<Props & Handlers> = ({ ingredient, dosage, origin, onClick, active, onDelete }) => (
  <Wrapper onClick={onClick} active={active}>
    <Content>
      <Title>{ ingredient }</Title>
      <Dosage>{ dosage }</Dosage>
      <Origin>
        <RadialSelected size='small'/>
        <OriginText>{ origin }</OriginText>
      </Origin>
    </Content>
    <FormCloseWrapper>
      <FormClose size='small' onClick={onDelete}/>
    </FormCloseWrapper>
    <Next/>
  </Wrapper>
)

export default Ingredient
