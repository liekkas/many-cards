/**
 * Created by liekkas on 2017/1/15.
 */
import React from 'react'
import styled from 'styled-components'
import Card from '../Card'

const Root = styled.div`
  color: red;
`

const ACard = (props) => {
  return (
    <Card>
       <h4>A Card</h4>
    </Card>
  )
}

export default ACard
