const title = ['Jets']
const icons = ['']

const data = [
  {
    title: 'Jets',
    icon: 'fa fa-fighter-jet',
    value: 2301,
    unit: 'u',
//     color: '#336699',
//     bgColor: 'lightblue',
  },{
    title: 'Trucks',
    icon: 'fa fa-truck',
    value: 2039,
  },{
    title: 'Growth',
    icon: 'fa fa-line-chart',
    value: 10.23,
    decimal: 2,
    unit: '%'
  },{
    title: 'Ships',
    icon: 'fa fa-ship',
    value: 109,
  }
]

export default {
  namespace: 'heart2',
  state: {
    data,
  },
  reducers: {},
  effects: {},
  subscriptions: {},
}

