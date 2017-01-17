const menus = [
  {
    key: 'home',
    name: 'Home',
    icon: 'home',
  },
  {
    key: 'heart',
    name: 'Heart Cards',
    icon: 'heart',
    children: [
      {
        key: 'heart2',
        name: 'Heart 2',
        icon: 'heart',
      }
    ]
  },
//   {
//     key: 'spade',
//     name: 'Spade Cards',
//     icon: 'heart',
//     children: [
//       {
//         key: 'spade2',
//         name: 'Spade 2',
//         icon: 'heart',
//       }
//     ]
//   },
//   {
//     key: 'diamond',
//     name: 'Diamond Cards',
//     icon: 'heart',
//     children: [
//       {
//         key: 'diamond1',
//         name: 'Diamond 1',
//         icon: 'heart',
//       }
//     ]
//   },
//   {
//     key: 'club',
//     name: 'Club Cards',
//     icon: 'heart',
//     children: [
//       {
//         key: 'club1',
//         name: 'Club 1',
//         icon: 'heart',
//       }
//     ]
//   }
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

