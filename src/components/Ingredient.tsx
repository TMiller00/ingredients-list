import React from 'react'
import styled from 'styled-components'
import { RadialSelected, Next } from 'grommet-icons'

const Dosage = styled.div`
  font-size: 22px;
  color: #9FAFC9;
  letter-spacing: 0.53px;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: #142B6F;
  width: 276px;
  height: 116px;
  padding: 12px 24px 12px 12px;

  svg {
    fill: #142B6F;
    stroke: #142B6F;
  }

  &:hover {
    background-color: #142B6F;
    color: white;

    svg {
      fill: white;
      stroke: white;
    }

    ${Dosage} {
      color: white;
    }
  }
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

const Location = styled.div`
  display: flex;
  align-items: center;
`

const LocationText = styled.div`
  font-size: 18px;
  letter-spacing: 0;
  margin-left: 8px;
`

const Ingredient: React.FC = () => (
  <Wrapper>
    <Content>
      <Title>Folate</Title>
      <Dosage>600 MCG</Dosage>
      <Location>
        <RadialSelected size='small'/>
        <LocationText>Pisticci, Italy</LocationText>
      </Location>
    </Content>
    <Next/>
  </Wrapper>
)

export default Ingredient
