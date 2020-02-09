import React, { useState } from 'react'
import styled from 'styled-components'
import image from '../assets/ingredients/folate.png'

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 28px 40px;
`

const Form = styled.form`
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-gap: 16px 0;
  align-items: center;
`

const Label = styled.label`
  grid-column: 1 / 2;
  font-size: 24px;
  color: #3B4C7F;
  letter-spacing: 0.58px;
`

const Input = styled.input`
  grid-column: 2 / 2;
  background: #F7F7F7;
  border: 1px solid #142B6F;
  border-radius: 8px;
  height: 60px;
  width: 366px;
`

const Submit = styled.input`
  grid-column: 2 / 2;
  background: #142B6F;
  border-radius: 8px;
  font-size: 24px;
  color: #FFFFFF;
  letter-spacing: 0.58px;
  height: 60px;
  width: 166px;
`

const FormInput: React.FC<{ onChange: any, label: string, value: string }> = ({ onChange, label, value }) => (
  <>
    <Label>{ label }:</Label>
    <Input
      type='text'
      name={label}
      onChange={onChange}
      value={value}
    />
  </>
)

const inputs = ['ingredient', 'dosage', 'form', 'origin', 'manufacturer', 'foundIn']

const initialState = {
  ingredient: '',
  dosage: '',
  origin: '',
  form: '',
  manufacturer: '',
  benefits: ['DNA Methylation', 'Mood', 'Brain Health'],
  foundIn: '',
  image
}

const IngredientForm: React.FC<{ onSubmit: (e: any, item: any) => void }> = ({ onSubmit }) => {
  const [form, setForm] = useState(initialState) as any

  return (
    <Wrapper >
      <Form onSubmit={(e) => onSubmit(e, form)}>
        { inputs.map((c: string, i: any) => (
          <FormInput
            key={i}
            label={c}
            value={form[c]}
            onChange={(e: any) => setForm({ ...form, [c]: e.target.value })}
          />
        ))}
        <Submit type="submit" value="Submit"/>
      </Form>
    </Wrapper>
  )
}

export default IngredientForm
