/**
 * Created by liekkas on 2017/1/17.
 */
import MDColor from './colors'
import _ from 'lodash'

const types = ['Heart','Spade','Diamond','Club']
const series = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']

let _option = {
  color: MDColor.mdWhite,
  bgColor: MDColor.mdWhite,
  borderColor: MDColor.mdGrey200,
  colors: [MDColor.mdBlue400, MDColor.mdGreen400, MDColor.mdOrange400, MDColor.mdRed400],
  bgColors: [MDColor.mdBlue400, MDColor.mdGreen400, MDColor.mdOrange400, MDColor.mdRed400],
}

export function setOption(option) {
  if(_.isEmpty(option)) return
  _option = {..._option, ...option}
}

export function getOption() {
  return _option
}

export default {
  getOption: getOption,
  setOption: setOption
}
