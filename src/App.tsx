import React from 'react';
import Ingredient, { Props as IngredientType } from './components/Ingredient'

const data = [
  {
    ingredient: 'Folate',
    dosage: '600 MCG',
    origin: 'Pisticci, Italy'
  },
  {
    ingredient: 'Omega-3',
    dosage: '320 MG',
    origin: 'South Carolina, USA'
  },
  {
    ingredient: 'Vitamin D3',
    dosage: '2000 IU',
    origin: 'United Kingdom'
  },
  {
    ingredient: 'Iron',
    dosage: '8 MG',
    origin: 'Utah, USA'
  },
  {
    ingredient: 'Vitamin K2',
    dosage: '90 MCG',
    origin: 'Oslo, Norway'
  },
  {
    ingredient: 'Magnesium',
    dosage: '50 MG',
    origin: 'Pisa, Italy'
  },
]

const App = () => {
  return (
    <div>
      { data.map((c: IngredientType, i: number) => <Ingredient key={i} {...c}/>) }
    </div>
  );
}

export default App;
