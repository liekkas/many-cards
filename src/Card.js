/**
 * Created by liekkas on 2017/1/15.
 */
import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import CC from './CardConfig'

const option = CC.getOption()
const {colors} = option

const borderFunc = (props) =>
  props.borderColor ? `1px solid ${props.borderColor}`
    : props.showBorder ? `1px solid ${option.borderColor}`
      : 'none'

const borderTypeFunc = (props, color, isShow) =>
  props[color] ? `4px solid ${props[color]}`
    : props[isShow] ? `4px solid ${colors[props.cIndex%colors.length]}`
      : borderFunc(props)

const bgColorFunc = (props) =>
  props.bgColor ? props.bgColor
    : props.inverted ? colors[props.cIndex%colors.length]
      : option.bgColor

const colorFunc = (props) =>
  props.color ? props.color
    : !props.inverted ? colors[props.cIndex%colors.length]
      : option.color

const Root = styled.div`
  border: ${props => borderFunc(props)};
  border-top: ${props => borderTypeFunc(props, 'borderTopColor', 'showBorderTop')};
  border-bottom: ${props => borderTypeFunc(props, 'borderBottomColor', 'showBorderBottom')};
  border-left: ${props => borderTypeFunc(props, 'borderLeftColor', 'showBorderLeft')};
  border-right: ${props => borderTypeFunc(props, 'borderRightColor', 'showBorderRight')};
  box-sizing: border-box;
  border-radius: 8px;
  color: ${props => colorFunc(props)};
  background-color: ${props => bgColorFunc(props)};
  margin-bottom: 16px;
  &:hover {
    box-shadow: 0 1px 6px rgba(0,0,0,0.2);
  }
`

const Card = (props) => {
  return (
    <Root {...props}>
        {props.children}
    </Root>
  )
}

Card.propTypes = {
  $type: React.PropTypes.string,
  cIndex: React.PropTypes.number,

  color: React.PropTypes.string,
  bgColor: React.PropTypes.string,
  borderColor: React.PropTypes.string,

  inverted: React.PropTypes.bool,

  showBorder: React.PropTypes.bool,
  showBorderTop: React.PropTypes.bool,
  showBorderBottom: React.PropTypes.bool,
  showBorderLeft: React.PropTypes.bool,
  showBorderRight: React.PropTypes.bool,

  borderTopColor: React.PropTypes.string,
  borderBottomColor: React.PropTypes.string,
  borderLeftColor: React.PropTypes.string,
  borderRightColor: React.PropTypes.string,
}

Card.defaultProps = {
  showBorder: true,
  inverted: false,
  cIndex: 0,
}

export default Card
