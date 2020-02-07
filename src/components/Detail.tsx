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
  display: flex;
  flex-direction: column;
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
      { benefits?.map((c: string, i: number) => (
        <div key={i}>
          <Icon text={c}/>
          <Text>{ c }</Text>
        </div>
      ))}
      <Text caps>Found In</Text>
      <Text>{ foundIn }</Text>
    </Wrapper>
  )
}

export default Detail
