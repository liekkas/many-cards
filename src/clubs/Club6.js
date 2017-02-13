/**
 * Created by liekkas on 2017/2/9.
 */
import React, {PropTypes} from 'react'
import styled from 'styled-components'
import Card from '../Card'
import ECharts from 're-echarts'
import CC from '../CardConfig'
import './echarts-liquidfill'

const option = CC.getOption('Club6')

function genOption(value, title, unit, color=option.colors[0] || 'lightBlue') {
  return {
    title: {
      text: title,
      left: '6',
      top: 6,
      textStyle: {
//         color: color.PRIMARY_TEXT_COLOR,
        insideColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        left: 'center',
      }
    },
    series: [{
      type: 'liquidFill',
      data: [{
        value: value,
        direction: 'left',
        itemStyle: {
          normal: {
            color: color
          }
        }
      }],
      backgroundStyle: {
        color: 'white',
      },
      radius: '60%',
      silent: true,
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderColor: color,
          borderWidth: 2,
        }
      },
      label: {
        normal: {
          show: true,
          formatter: function (v) {
            return parseInt(v.value * 100) + unit
          },
          textStyle: {
            color: '#000',
            insideColor: '#fff',
            fontSize: 16,
            fontWeight: 'bold',

            align: 'center',
            baseline: 'middle'
          },
          position: 'inside',
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.25)'
        }
      }
    }]
  }
}

const Club6 = ({value, title, unit, color}) => {
  return (
    <Card>
      <ECharts option={genOption(value, title, unit, color)} style={{width: '100%', height: '100%', minHeight: '200px'}}/>
    </Card>
  )
}

Club6.propsType = {
  value: PropTypes.number,
  color: PropTypes.string,
  title: PropTypes.string,
  unit: PropTypes.string,
}

Club6.defaultProps = {
  title: '',
  unit: ''
}

export default Club6
