/**
 * Created by liekkas on 2017/1/16.
 */
import React from 'react'
import styled from 'styled-components'
import {connect} from 'dva'
import {Heart2, Card} from '../../../../dist'
import {Row, Col, Switch} from 'antd'

const Controller = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

const Item = styled.div`
  padding: 0 12px;
`

class Heart2Demo extends React.Component {
  state = {
    showBorder: true,
    showBorderTop: false,
    showBorderBottom: false,
    showBorderLeft: false,
    showBorderRight: false,
    inverted: false,
  }

  handleToggle = (prop) => {
    return (enable) => {
      this.setState({ [prop]: enable });
    };
  }

  render() {
    const { heart2 } = this.props
    const state = this.state
    const boolProps = ['showBorder','inverted','showBorderTop','showBorderBottom','showBorderLeft','showBorderRight']
    return (
      <div>
        <Controller>
          {
            boolProps.map(bp =>
              <Item key={bp}>
                <label>{bp}:&nbsp;</label>
                <Switch checked={state[bp]} onChange={this.handleToggle(bp)} />
              </Item>
            )
          }
        </Controller>
        <Row gutter={16}>
          {
            heart2.data.map((item, index) =>
              <Col key={index} md={8} lg={6} sm={12}>
                <Heart2 {...item} cIndex={index}
                        showBorder={state.showBorder}
                        showBorderTop={state.showBorderTop}
                        showBorderBottom={state.showBorderBottom}
                        showBorderLeft={state.showBorderLeft}
                        showBorderRight={state.showBorderRight}
                        inverted={state.inverted}
                />
              </Col>
            )
          }
        </Row>
      </div>
    )
  }
}

export default connect(({heart2}) => ({heart2}))(Heart2Demo);

