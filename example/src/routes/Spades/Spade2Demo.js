/**
 * Created by liekkas on 2017/1/16.
 */
import React from 'react'
import styled from 'styled-components'
import {connect} from 'dva'
import {Spade2} from '../../../../dist'
import {Row, Col} from 'antd'

const Root = styled(Spade2)`

`

const Spade2Demo = ({spade2}) => {
  return (
    <Row gutter={16}>
      {
        spade2.data.map((item, index) =>
          <Col key={index} md={8} lg={6} sm={12}>
            <Spade2 {...item}></Spade2>
          </Col>
        )
      }
    </Row>
  )
}

export default connect(({spade2}) => ({spade2}))(Spade2Demo);

