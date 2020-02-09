import React, { useState } from 'react'
import styled from 'styled-components'
import initialData from './data'
import { Header, Ingredient, Detail, AddIngredient, IngredientForm } from './components'
import { Props as IngredientType } from './components/Ingredient'


const Content = styled.div`
  display: flex;
`

const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #142B6F;
`

const App = () => {
  const [currentDetail, setCurrentDetail] = useState(0)
  const [data, setData] = useState(initialData)
  const [showIngredientForm, setShowIngredientForm] = useState(false)

  const handleSubmit = (event: any, item: any) => {
    event.preventDefault()
    setData([...data, item])
    setShowIngredientForm(false)
    setCurrentDetail(data.length)
  }

  const handleDetail = (index: number) => {
    if (showIngredientForm === true) {
      setShowIngredientForm(false)
    }
    setCurrentDetail(index)
  }

  return (
    <>
      <Header/>
      <Content>
        <Ingredients>
          { data.map((c: IngredientType, i: number) => (
            <Ingredient
              key={i}
              {...c}
              active={currentDetail === i}
              onClick={() => handleDetail(i)}
            />
          ))}
          <AddIngredient onClick={() => setShowIngredientForm(true)}/>
        </Ingredients>
        { showIngredientForm ? <IngredientForm onSubmit={(e, item: any) => handleSubmit(e, item)}/> : <Detail {...data[currentDetail]}/> }
      </Content>
    </>
  )
}

export default App;
