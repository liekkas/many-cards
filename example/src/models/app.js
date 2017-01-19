import home from '../assets/home.png'
import heart from '../assets/heart.png'
import spade from '../assets/spade.png'
import diamond from '../assets/diamond.png'
import club from '../assets/club.png'

const menus = [
  {
    key: 'home',
    name: 'Home',
    icon: home,
  },
  {
    key: 'heart',
    name: 'Heart Cards',
    icon: heart,
    children: [
      {
        key: 'heart2',
        name: 'Heart 2',
        icon: heart,
      }
    ]
  },
  {
    key: 'spade',
    name: 'Spade Cards',
    icon: spade,
  },
  {
    key: 'diamond',
    name: 'Diamond Cards',
    icon: diamond,
  },
  {
    key: 'club',
    name: 'Club Cards',
    icon: club,
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

