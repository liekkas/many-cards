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

const api = [
  {
    prop: 'showBorder',
    desc: '',
    type: 'bool',
    defaultValue: 'true'
  },{
    prop: 'showBorderTop',
    desc: '',
    type: 'bool',
    defaultValue: 'false'
  },{
    prop: 'showBorderBottom',
    desc: '',
    type: 'bool',
    defaultValue: 'false'
  },{
    prop: 'showBorderLeft',
    desc: '',
    type: 'bool',
    defaultValue: 'false'
  },{
    prop: 'showBorderRight',
    desc: '',
    type: 'bool',
    defaultValue: 'false'
  },{
    prop: 'inverted',
    desc: '',
    type: 'bool',
    defaultValue: 'false'
  },
]

export default {
  namespace: 'heart2',
  state: {
    data,
    api,
  },
  reducers: {},
  effects: {},
  subscriptions: {},
}

