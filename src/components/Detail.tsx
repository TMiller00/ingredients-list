import React from 'react'
import styled, { css } from 'styled-components'
import { Props as IngredientType } from './Ingredient'
import Icon from './Icon'

type Props = IngredientType & {
  image?: string
  form: string
  manufacturer: string,
  benefits?: string[]
  foundIn: string
}

const ShortBorder = css`
  content: '';
  background: #3B4C7F;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 268px;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 28px 32px;
  width: 580px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 266px;
`

const Title = styled.div`
  font-size: 64px;
  color: #142B6F;
  letter-spacing: 0;
  line-height: 32px;
  margin-bottom: 16px;
  z-index: 1;
`

const Image = styled.img`
  position: absolute;
  max-width: 408px;
  width: 100%;
  right: 0;
`

const Text = styled.div<{ caps?: boolean, thin?: boolean }>`
  font-size: 24px;
  color: #3B4C7F;
  letter-spacing: 0.58px;
  text-transform: ${props => props.caps ? 'uppercase' : 'capitalize' };
  font-weight: ${props => props.thin ? 300 : 400 };
  z-index: 1;
`

const Benefits = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  height: 195px;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
  margin: 20px 0 35px;

  &:before {
    ${ShortBorder}
    top: 0;
  }

  &:after {
    ${ShortBorder}
  }
`

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 136px;
  text-align: center;

  img {
    margin-bottom: 24px;
  }
`

const Detail: React.FC<Props> = (props) => {
  const { ingredient, dosage, origin, form, manufacturer, image, benefits, foundIn } = props

  return (
    <Wrapper>
      <Header>
        <Title>{ ingredient }</Title>
        <Text>{ dosage }</Text>
        <Image src={ image } alt={ingredient}/>
      </Header>
      <Text caps thin>FORM: { form }</Text>
      <Text caps thin>DOSAGE: { dosage }</Text>
      <Text thin>SOURCE: { origin }</Text>
      <Text thin>MANUFACTURER: { manufacturer }</Text>
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
