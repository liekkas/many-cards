/**
 * Created by liekkas on 2017/1/15.
 */
import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  color: #E9DC51;
`

const Card = (props) => {
  return (
    <Root>
        {props.children}
    </Root>
  )
}

export default Card
