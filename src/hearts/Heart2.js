/**
 * Created by liekkas on 2017/1/16.
 */
import React, {PropTypes} from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'
import Card from '../Card'

const Root = styled(Card)`
  padding: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Icon = styled.span`
  font-size: 3.5rem;
`

const Header = styled.div`
  text-align: center;
  font-size: 1.2rem;
`

const Title = styled.p`
  
`

const Number = styled.p`
  font-size: 2.5rem;
  font-family: monospace;
`

const Heart2 = (props) => {
  const {cIndex, title, value, icon, unit, decimal, inverted, color, bgColor, borderColor,
    showBorder,showBorderTop,showBorderBottom,showBorderLeft,showBorderRight,
    borderTopColor, borderBottomColor, borderLeftColor, borderRightColor} = props
  return (
    <Root $type="Heart2"
          cIndex={cIndex}
          color={color}
          bgColor={bgColor}
          borderColor={borderColor}
          inverted={inverted}
          showBorder={showBorder}
          showBorderTop={showBorderTop}
          showBorderBottom={showBorderBottom}
          showBorderLeft={showBorderLeft}
          showBorderRight={showBorderRight}
          borderTopColor={borderTopColor}
          borderBottomColor={borderBottomColor}
          borderLeftColor={borderLeftColor}
          borderRightColor={borderRightColor}
    >
      <Icon className={icon} />
      <Header>
        <Title>{title}</Title>
        <Number>
          <CountUp
            start={0}
            end={value}
            duration={2}
            useEasing
            decimals={decimal}
            useGrouping
            separator=','
            suffix={unit}
          />
        </Number>
      </Header>
    </Root>
  )
}

Heart2.propsType = {
  title: PropTypes.string,
  total: PropTypes.number,
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

Heart2.defaultProps = {
  total: 2017,
  cIndex: 0
}


export default Heart2
