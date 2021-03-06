/**
 * Created by liekkas on 2017/1/16.
 */
const colors = {
  mdRed50: '#ffebee',
  mdRed100: '#ffcdd2',
  mdRed200: '#ef9a9a',
  mdRed300: '#e57373',
  mdRed400: '#ef5350',
  mdRed500: '#f44336',
  mdRed600: '#e53935',
  mdRed700: '#d32f2f',
  mdRed800: '#c62828',
  mdRed900: '#b71c1c',
  mdRedA100: '#ff8a80',
  mdRedA200: '#ff5252',
  mdRedA400: '#ff1744',
  mdRedA700: '#d50000',

  mdPink50: '#fce4ec',
  mdPink100: '#f8bbd0',
  mdPink200: '#f48fb1',
  mdPink300: '#f06292',
  mdPink400: '#ec407a',
  mdPink500: '#e91e63',
  mdPink600: '#d81b60',
  mdPink700: '#c2185b',
  mdPink800: '#ad1457',
  mdPink900: '#880e4f',
  mdPinkA100: '#ff80ab',
  mdPinkA200: '#ff4081',
  mdPinkA400: '#f50057',
  mdPinkA700: '#c51162',

  mdPurple50: '#f3e5f5',
  mdPurple100: '#e1bee7',
  mdPurple200: '#ce93d8',
  mdPurple300: '#ba68c8',
  mdPurple400: '#ab47bc',
  mdPurple500: '#9c27b0',
  mdPurple600: '#8e24aa',
  mdPurple700: '#7b1fa2',
  mdPurple800: '#6a1b9a',
  mdPurple900: '#4a148c',
  mdPurpleA100: '#ea80fc',
  mdPurpleA200: '#e040fb',
  mdPurpleA400: '#d500f9',
  mdPurpleA700: '#aa00ff',

  mdDeepPurple50: '#ede7f6',
  mdDeepPurple100: '#d1c4e9',
  mdDeepPurple200: '#b39ddb',
  mdDeepPurple300: '#9575cd',
  mdDeepPurple400: '#7e57c2',
  mdDeepPurple500: '#673ab7',
  mdDeepPurple600: '#5e35b1',
  mdDeepPurple700: '#512da8',
  mdDeepPurple800: '#4527a0',
  mdDeepPurple900: '#311b92',
  mdDeepPurpleA100: '#b388ff',
  mdDeepPurpleA200: '#7c4dff',
  mdDeepPurpleA400: '#651fff',
  mdDeepPurpleA700: '#6200ea',

  mdIndigo50: '#e8eaf6',
  mdIndigo100: '#c5cae9',
  mdIndigo200: '#9fa8da',
  mdIndigo300: '#7986cb',
  mdIndigo400: '#5c6bc0',
  mdIndigo500: '#3f51b5',
  mdIndigo600: '#3949ab',
  mdIndigo700: '#303f9f',
  mdIndigo800: '#283593',
  mdIndigo900: '#1a237e',
  mdIndigoA100: '#8c9eff',
  mdIndigoA200: '#536dfe',
  mdIndigoA400: '#3d5afe',
  mdIndigoA700: '#304ffe',

  mdBlue50: '#e3f2fd',
  mdBlue100: '#bbdefb',
  mdBlue200: '#90caf9',
  mdBlue300: '#64b5f6',
  mdBlue400: '#42a5f5',
  mdBlue500: '#2196f3',
  mdBlue600: '#1e88e5',
  mdBlue700: '#1976d2',
  mdBlue800: '#1565c0',
  mdBlue900: '#0d47a1',
  mdBlueA100: '#82b1ff',
  mdBlueA200: '#448aff',
  mdBlueA400: '#2979ff',
  mdBlueA700: '#2962ff',

  mdLightBlue50: '#e1f5fe',
  mdLightBlue100: '#b3e5fc',
  mdLightBlue200: '#81d4fa',
  mdLightBlue300: '#4fc3f7',
  mdLightBlue400: '#29b6f6',
  mdLightBlue500: '#03a9f4',
  mdLightBlue600: '#039be5',
  mdLightBlue700: '#0288d1',
  mdLightBlue800: '#0277bd',
  mdLightBlue900: '#01579b',
  mdLightBlueA100: '#80d8ff',
  mdLightBlueA200: '#40c4ff',
  mdLightBlueA400: '#00b0ff',
  mdLightBlueA700: '#0091ea',

  mdCyan50: '#e0f7fa',
  mdCyan100: '#b2ebf2',
  mdCyan200: '#80deea',
  mdCyan300: '#4dd0e1',
  mdCyan400: '#26c6da',
  mdCyan500: '#00bcd4',
  mdCyan600: '#00acc1',
  mdCyan700: '#0097a7',
  mdCyan800: '#00838f',
  mdCyan900: '#006064',
  mdCyanA100: '#84ffff',
  mdCyanA200: '#18ffff',
  mdCyanA400: '#00e5ff',
  mdCyanA700: '#00b8d4',

  mdTeal50: '#e0f2f1',
  mdTeal100: '#b2dfdb',
  mdTeal200: '#80cbc4',
  mdTeal300: '#4db6ac',
  mdTeal400: '#26a69a',
  mdTeal500: '#009688',
  mdTeal600: '#00897b',
  mdTeal700: '#00796b',
  mdTeal800: '#00695c',
  mdTeal900: '#004d40',
  mdTealA100: '#a7ffeb',
  mdTealA200: '#64ffda',
  mdTealA400: '#1de9b6',
  mdTealA700: '#00bfa5',

  mdGreen50: '#e8f5e9',
  mdGreen100: '#c8e6c9',
  mdGreen200: '#a5d6a7',
  mdGreen300: '#81c784',
  mdGreen400: '#66bb6a',
  mdGreen500: '#4caf50',
  mdGreen600: '#43a047',
  mdGreen700: '#388e3c',
  mdGreen800: '#2e7d32',
  mdGreen900: '#1b5e20',
  mdGreenA100: '#b9f6ca',
  mdGreenA200: '#69f0ae',
  mdGreenA400: '#00e676',
  mdGreenA700: '#00c853',

  mdLightGreen50: '#f1f8e9',
  mdLightGreen100: '#dcedc8',
  mdLightGreen200: '#c5e1a5',
  mdLightGreen300: '#aed581',
  mdLightGreen400: '#9ccc65',
  mdLightGreen500: '#8bc34a',
  mdLightGreen600: '#7cb342',
  mdLightGreen700: '#689f38',
  mdLightGreen800: '#558b2f',
  mdLightGreen900: '#33691e',
  mdLightGreenA100: '#ccff90',
  mdLightGreenA200: '#b2ff59',
  mdLightGreenA400: '#76ff03',
  mdLightGreenA700: '#64dd17',

  mdLime50: '#f9fbe7',
  mdLime100: '#f0f4c3',
  mdLime200: '#e6ee9c',
  mdLime300: '#dce775',
  mdLime400: '#d4e157',
  mdLime500: '#cddc39',
  mdLime600: '#c0ca33',
  mdLime700: '#afb42b',
  mdLime800: '#9e9d24',
  mdLime900: '#827717',
  mdLimeA100: '#f4ff81',
  mdLimeA200: '#eeff41',
  mdLimeA400: '#c6ff00',
  mdLimeA700: '#aeea00',

  mdYellow50: '#fffde7',
  mdYellow100: '#fff9c4',
  mdYellow200: '#fff59d',
  mdYellow300: '#fff176',
  mdYellow400: '#ffee58',
  mdYellow500: '#ffeb3b',
  mdYellow600: '#fdd835',
  mdYellow700: '#fbc02d',
  mdYellow800: '#f9a825',
  mdYellow900: '#f57f17',
  mdYellowA100: '#ffff8d',
  mdYellowA200: '#ffff00',
  mdYellowA400: '#ffea00',
  mdYellowA700: '#ffd600',

  mdAmber50: '#fff8e1',
  mdAmber100: '#ffecb3',
  mdAmber200: '#ffe082',
  mdAmber300: '#ffd54f',
  mdAmber400: '#ffca28',
  mdAmber500: '#ffc107',
  mdAmber600: '#ffb300',
  mdAmber700: '#ffa000',
  mdAmber800: '#ff8f00',
  mdAmber900: '#ff6f00',
  mdAmberA100: '#ffe57f',
  mdAmberA200: '#ffd740',
  mdAmberA400: '#ffc400',
  mdAmberA700: '#ffab00',

  mdOrange50: '#fff3e0',
  mdOrange100: '#ffe0b2',
  mdOrange200: '#ffcc80',
  mdOrange300: '#ffb74d',
  mdOrange400: '#ffa726',
  mdOrange500: '#ff9800',
  mdOrange600: '#fb8c00',
  mdOrange700: '#f57c00',
  mdOrange800: '#ef6c00',
  mdOrange900: '#e65100',
  mdOrangeA100: '#ffd180',
  mdOrangeA200: '#ffab40',
  mdOrangeA400: '#ff9100',
  mdOrangeA700: '#ff6d00',

  mdDeepOrange50: '#fbe9e7',
  mdDeepOrange100: '#ffccbc',
  mdDeepOrange200: '#ffab91',
  mdDeepOrange300: '#ff8a65',
  mdDeepOrange400: '#ff7043',
  mdDeepOrange500: '#ff5722',
  mdDeepOrange600: '#f4511e',
  mdDeepOrange700: '#e64a19',
  mdDeepOrange800: '#d84315',
  mdDeepOrange900: '#bf360c',
  mdDeepOrangeA100: '#ff9e80',
  mdDeepOrangeA200: '#ff6e40',
  mdDeepOrangeA400: '#ff3d00',
  mdDeepOrangeA700: '#dd2c00',

  mdBrown50: '#efebe9',
  mdBrown100: '#d7ccc8',
  mdBrown200: '#bcaaa4',
  mdBrown300: '#a1887f',
  mdBrown400: '#8d6e63',
  mdBrown500: '#795548',
  mdBrown600: '#6d4c41',
  mdBrown700: '#5d4037',
  mdBrown800: '#4e342e',
  mdBrown900: '#3e2723',

  mdGrey50: '#fafafa',
  mdGrey100: '#f5f5f5',
  mdGrey200: '#eeeeee',
  mdGrey300: '#e0e0e0',
  mdGrey400: '#bdbdbd',
  mdGrey500: '#9e9e9e',
  mdGrey600: '#757575',
  mdGrey700: '#616161',
  mdGrey800: '#424242',
  mdGrey900: '#212121',

  mdBlueGrey50: '#eceff1',
  mdBlueGrey100: '#cfd8dc',
  mdBlueGrey200: '#b0bec5',
  mdBlueGrey300: '#90a4ae',
  mdBlueGrey400: '#78909c',
  mdBlueGrey500: '#607d8b',
  mdBlueGrey600: '#546e7a',
  mdBlueGrey700: '#455a64',
  mdBlueGrey800: '#37474f',
  mdBlueGrey900: '#263238',

  mdWhite: '#ffffff',

  mdBlack: '#000000',
}

module.exports = colors
