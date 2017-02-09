import heart from '../assets/heart.png'
import club from '../assets/club.png'
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
  {
    name: 'Club2',
    index: '2',
    img: club,
    path: 'club/club2',
    author: 'liekkas',
    modifyTime: '2017-02-08',
    borderColor: colors.mdGrey800
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

