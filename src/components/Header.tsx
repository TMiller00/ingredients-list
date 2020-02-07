import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  height: 144px;
  align-items: center;
  justify-content: center;
  color: #142B6F;
`

const Title = styled.h1`
  font-size: 40px;
  letter-spacing: 0;
  text-align: center;
  line-height: 41px;
  font-weight: normal;
  margin: 0;
`

const Header: React.FC = () => (
  <Wrapper>
    <Title>
      <div>Essential</div>
      <div>Nutrients</div>
    </Title>
  </Wrapper>
)

export default Header
