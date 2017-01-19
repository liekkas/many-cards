import heart from '../assets/heart.png'
import colors from '../../../dist/colors'

const data = [
  {
    name: 'Heart2',
    index: '2',
    img: heart,
    path: 'heart/heart2',
    author: 'liekkas',
    modifyTime: '2017-01-18',
    borderColor: colors.mdRed400
  },
]

export default {
  namespace: 'home',
  state: {
    data,
  },
  reducers: {},
  effects: {},
  subscriptions: {},
}

