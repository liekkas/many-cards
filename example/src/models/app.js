import home from '../assets/home.png'
import heart from '../assets/heart.png'
import spade from '../assets/spade.png'
import diamond from '../assets/diamond.png'
import club from '../assets/club.png'

const menus = [
  {
    key: 'home',
    name: 'Home',
    img: home,
  },
  {
    key: 'heart',
    name: 'Heart Cards',
    img: heart,
    children: [
      {
        key: 'heart2',
        name: 'Heart 2',
        img: heart,
      }
    ]
  },
  {
    key: 'spade',
    name: 'Spade Cards',
    img: spade,
  },
  {
    key: 'diamond',
    name: 'Diamond Cards',
    img: diamond,
  },
  {
    key: 'club',
    name: 'Club Cards',
    img: club,
  }
]

export default {
  namespace: 'app',
  state: {
    menus,
  },
  reducers: {},
  effects: {},
  subscriptions: {},
}

