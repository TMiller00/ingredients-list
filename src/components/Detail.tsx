import React from 'react'
import styled from 'styled-components'
import { Props as IngredientType } from './Ingredient'
import Icon from './Icon'

type Props = IngredientType & {
  image?: string
  form: string
  manufacturer: string,
  benefits?: string[]
  foundIn: string
}

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 32px;
`

const Header = styled.div`
  display: flex;
`

const Title = styled.div`
  font-size: 64px;
  color: #142B6F;
  letter-spacing: 0;
  line-height: 32px;
`

const Image = styled.img`
  max-width: 408px;
  width: 100%;
`

const Text = styled.div<{ caps?: boolean }>`
  font-size: 24px;
  color: #3B4C7F;
  letter-spacing: 0.58px;
  text-transform: ${props => props.caps ? 'uppercase' : 'capitalize' };
`

const Benefits = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 195px;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 32px 0;
`

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 136px;
  text-align: center;
`

const Detail: React.FC<Props> = (props) => {
  const { ingredient, dosage, origin, form, manufacturer, image, benefits, foundIn } = props

  return (
    <Wrapper>
      <Header>
        <div>
          <Title>{ ingredient }</Title>
          <Text>{ dosage }</Text>
        </div>
        <Image src={ image } alt={ingredient}/>
      </Header>
      <Text>FORM: { form }</Text>
      <Text caps>DOSAGE: { dosage }</Text>
      <Text>SOURCE: { origin }</Text>
      <Text>MANUFACTURER: { manufacturer }</Text>
      <Benefits>
      { benefits?.map((c: string, i: number) => (
        <Benefit key={i}>
          <Icon text={c}/>
          <Text>{ c }</Text>
        </Benefit>
      ))}
      </Benefits>
      <Text caps>Found In</Text>
      <Text>{ foundIn }</Text>
    </Wrapper>
  )
}

export default Detail
