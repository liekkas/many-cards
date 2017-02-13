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
    detail: [
      {label: 'Jet001', value: 20},
      {label: 'F35', value: 12},
      {label: 'F42', value: 32},
    ]
  },{
    title: 'Trucks',
    icon: 'fa fa-truck',
    value: 2039,
    detail: [
      {label: 'Truck21', value: 123},
      {label: 'Truck22', value: 80},
      {label: 'Truck23', value: 60},
    ]
  },{
    title: 'Growth',
    icon: 'fa fa-line-chart',
    value: 10.23,
    decimal: 2,
    unit: '%',
    detail: [
      {label: 'Good', value: 23.21},
      {label: 'Bad', value: 20.11},
      {label: 'Normal', value: 15.34},
    ]
  },{
    title: 'Ships',
    icon: 'fa fa-ship',
    value: 109,
    detail: [
      {label: 'Ship1', value: 8},
      {label: 'Ship2', value: 6},
      {label: 'Ship3', value: 4},
    ]
  }
]

const api = [
  {
    prop: 'title',
    desc: '',
    type: 'string',
    defaultValue: ''
  },{
    prop: 'value',
    desc: '',
    type: 'number',
    defaultValue: '2017'
  },{
    prop: 'decimal',
    desc: '小数点位数',
    type: 'number',
    defaultValue: '0'
  },{
    prop: 'unit',
    desc: '单位',
    type: 'string',
    defaultValue: ''
  },{
    prop: 'icon',
    desc: `font icon. 比如引入 fontawesome, 想要心状图标,可以输入'fa fa-heart'`,
    type: 'string',
    defaultValue: ''
  },{
    prop: 'img',
    desc: `image url, 尺寸大小为 3.2rem*3.2rem, 并做圆角处理`,
    type: 'string',
    defaultValue: ''
  }, {
    prop: 'cIndex',
    desc: 'color index.颜色索引值。卡片默认有一组颜色值colors,如果设置了cIndex,字体颜色、边框颜色、背景颜色(inverted)就会循环从这个颜色列表中指定位置读颜色值。' +
    '默认为-1,即不从colors列表中取值。此时字体颜色使用color,边框颜色使用borderColor,背景颜色使用bgColor.',
    type: 'number',
    defaultValue: '-1'
  },{
    prop: 'inverted',
    desc: '颜色反转,字体颜色使用背景颜色值,背景颜色使用字体颜色值。',
    type: 'bool',
    defaultValue: 'false'
  },{
    prop: 'color',
    desc: '字体颜色,背景颜色(inverted)',
    type: 'string',
    defaultValue: '#424242'
  },{
    prop: 'bgColor',
    desc: '背景颜色,字体颜色(inverted)',
    type: 'string',
    defaultValue: '#ffffff'
  },{
    prop: 'colors',
    desc: '颜色值列表,卡片通过cIndex(>-1时)来循环获取colors对应颜色值。',
    type: 'array',
    defaultValue: `['#42a5f5','#66bb6a','#ffa726','#ef5350']`
  },{
    prop: 'showBorder',
    desc: '',
    type: 'bool',
    defaultValue: 'true'
  },{
    prop: 'borderWidth',
    desc: '',
    type: 'number',
    defaultValue: '2'
  },{
    prop: 'borderStyle',
    desc: '',
    type: 'string',
    defaultValue: 'solid'
  },{
    prop: 'borderRadius',
    desc: '',
    type: 'number',
    defaultValue: '8'
  },{
    prop: 'borderColor',
    desc: '',
    type: 'string',
    defaultValue: '#eeeeee'
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
  }
]

export default {
  namespace: 'heart3',
  state: {
    data,
    api,
  },
  reducers: {},
  effects: {},
  subscriptions: {},
}

