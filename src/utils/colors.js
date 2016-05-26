/**
 * Colors utility class. Provides scales for each color palette.
 */
class Colors {

  static category1() {
    return d3.scale.ordinal().range(paletteCategory1);
  }

  static category2() {
    return d3.scale.ordinal().range(paletteCategory2);
  }

  static category3() {
    return d3.scale.ordinal().range(paletteCategory3);
  }

  static category4() {
    return d3.scale.ordinal().range(paletteCategory4);
  }

  static category5() {
    return d3.scale.ordinal().range(paletteCategory5);
  }

  static category6() {
    return d3.scale.ordinal().range(paletteCategory6);
  }

  static category7() {
    return d3.scale.ordinal().range(paletteCategory7);
  }

  static category8() {
    return d3.scale.ordinal().range(paletteCategory8);
  }

  static sequentialYellow() {
    return d3.scale.quantile().range(paletteSequentialYellow);
  }

  static sequentialRedOrange() {
    return d3.scale.quantile().range(paletteSequentialRedOrange);
  }

  static sequentialRed() {
    return d3.scale.quantile().range(paletteSequentialRed);
  }

  static sequentialPink() {
    return d3.scale.quantile().range(paletteSequentialPink);
  }

  static sequentialPurplePink() {
    return d3.scale.quantile().range(paletteSequentialPurplePink);
  }

  static sequentialPurple() {
    return d3.scale.quantile().range(paletteSequentialPurple);
  }

  static sequentialBlue() {
    return d3.scale.quantile().range(paletteSequentialBlue);
  }

  static sequentialLightBlue() {
    return d3.scale.quantile().range(paletteSequentialLightBlue);
  }

  static sequentialBlueViolet() {
    return d3.scale.quantile().range(paletteSequentialBlueViolet);
  }

  static sequentialTurquoise() {
    return d3.scale.quantile().range(paletteSequentialTurquoise);
  }

  static sequentialLightGreen() {
    return d3.scale.quantile().range(paletteSequentialLightGreen);
  }

  static sequentialDarkGreen() {
    return d3.scale.quantile().range(paletteSequentialDarkGreen);
  }

  static sequentialGreenBrown() {
    return d3.scale.quantile().range(paletteSequentialGreenBrown);
  }

  static sequentialBrown() {
    return d3.scale.quantile().range(paletteSequentialBrown);
  }

  static sequentialGrey() {
    return d3.scale.quantile().range(paletteSequentialGrey);
  }

  static sequentialVioletCb() {
    return d3.scale.quantile().range(paletteSequentialVioletCb);
  }

  static sequentialPinkCb() {
    return d3.scale.quantile().range(paletteSequentialPinkCb);
  }

  static sequentialBlueCb() {
    return d3.scale.quantile().range(paletteSequentialBlueCb);
  }

  static sequentialGreenCb() {
    return d3.scale.quantile().range(paletteSequentialGreenCb);
  }

  static sequentialGreenBrownCb() {
    return d3.scale.quantile().range(paletteSequentialGreenBrownCb);
  }

  static diverging_spectral1() {
    return d3.scale.quantile().range(paletteDivergingSpectral1);
  }

  static diverging_spectral2() {
    return d3.scale.quantile().range(paletteDivergingSpectral2);
  }

  static diverging_spectral3() {
    return d3.scale.quantile().range(paletteDivergingSpectral3);
  }

  static diverging_brown_turquoise() {
    return d3.scale.quantile().range(paletteDivergingBrownTurquoise);
  }

  static diverging_orange_pink() {
    return d3.scale.quantile().range(paletteDivergingBrownTurquoise);
  }

  static diverging_red_blue() {
    return d3.scale.quantile().range(paletteDivergingRedBlue);
  }

  static diverging_red_grey() {
    return d3.scale.quantile().range(paletteDivergingRedGrey);
  }

  static diverging_orange_violet() {
    return d3.scale.quantile().range(paletteDivergingOrangeViolet);
  }

  static diverging_purple_green() {
    return d3.scale.quantile().range(paletteDivergingPurpleGreen);
  }

  static diverging_violet_green() {
    return d3.scale.quantile().range(paletteDivergingVioletGreen);
  }

  static diverging_red_green() {
    return d3.scale.quantile().range(paletteDivergingRedGreen);
  }

  static diverging_brown_green() {
    return d3.scale.quantile().range(paletteDivergingBrownGreen);
  }

  static diverging_lightBrown_turquoise() {
    return d3.scale.quantile().range(palette_divergingLightBrownTurquoise);
  }
}

/**
 * List of color palettes
 */

const paletteCategory1 = [
  '#e1c8df',
  '#9ecd9d',
  '#acd9d6',
  '#e4e36b',
  '#bfa1c5',
  '#e4d3b8',
  '#facba8',
  '#ced4ea',
  '#acd9d6'
];

const paletteCategory2 = [
  '#b6dde2',
  '#6394af',
  '#e4e9ab',
  '#8ea876',
  '#f7dce1',
  '#cc878f',
  '#fadaac',
  '#f29a83',
  '#8d7e9e'
];

const paletteCategory3 = [
  '#6b68a9',
  '#8cc590',
  '#b9487d',
  '#bfa1c5',
  '#4e6936',
  '#71bbc3',
  '#484156',
  '#ccaf44',
  '#d0553c'
];

const paletteCategory4 = [
  '#f1a30d',
  '#1d4763',
  '#84c7bc',
  '#c1212d',
  '#8fbe46',
  '#076837',
  '#563a2d',
  '#563a2d',
  '#87325d'
];

const paletteCategory5 = [
  '#f1a30d',
  '#0c3183',
  '#acd9d6',
  '#c1212d',
  '#8fbe46',
  '#076837',
  '#8a6338',
  '#8d2d84',
  '#f09bbc'
];

const paletteCategory6 = [
  '#71bbc3',
  '#1d4763',
  '#8fbe46',
  '#4e6936',
  '#ee8998',
  '#c1212d',
  '#f5af3c',
  '#e95e2e',
  '#634484'
];

const paletteCategory7 = [
  '#ea671e',
  '#684592',
  '#84b92a',
  '#cd131c',
  '#3c5ba2',
  '#5baddc',
  '#ffde06',
  '#5db68b',
  '#775e47'
];

const paletteCategory8 = [
  '#ebd646',
  '#a50f38',
  '#00a096',
  '#f09bbc',
  '#065b78',
  '#72722a',
  '#005231',
  '#4d4e98',
  '#7c4d25'
];

const paletteSequentialYellow = [
  '#fff1c6',
  '#fee5a7',
  '#fcda87',
  '#face64',
  '#f8bf4b',
  '#f6b030',
  '#f4a009',
  '#d28514',
  '#b36c17',
  '#955618',
  '#7a4317',
  '#613214',
  '#49230f'
];

const paletteSequentialRedOrange = [
  '#ffecb8',
  '#fbd68b',
  '#f7bf5e',
  '#f3a82f',
  '#df7520',
  '#cd4925',
  '#be0a26',
  '#a81023',
  '#941320',
  '#80141d',
  '#6d1419',
  '#5a1215',
  '#470f0f'
];

const paletteSequentialRed = [
  '#fde4d4',
  '#f1c4af',
  '#f7bf5e',
  '#db826a',
  '#d0614d',
  '#c73e36',
  '#be0a26',
  '#a81023',
  '#941320',
  '#80141d',
  '#6d1419',
  '#5a1215',
  '#470f0f'
];

const paletteSequentialPink = [
  '#fbe3e3',
  '#f9cfcc',
  '#f0aaa9',
  '#ed7e7e',
  '#ea647b',
  '#e74576',
  '#e41270',
  '#c70f65',
  '#aa105c',
  '#8d1253',
  '#731448',
  '#5a123c',
  '#420e30'
];

const paletteSequentialPurplePink = [
  '#f9d8e6',
  '#ebbed7',
  '#dda4c7',
  '#c890bb',
  '#b27daf',
  '#8a4c94',
  '#622181',
  '#622181',
  '#50216b',
  '#472060',
  '#3e1f55',
  '#361e4b',
  '#2d1c41'
];

const paletteSequentialPurple = [
  '#f6e8f1',
  '#dcc5de',
  '#c2a3c9',
  '#a980b3',
  '#905e9f',
  '#793f8e',
  '#622181',
  '#592175',
  '#4f216b',
  '#462060',
  '#3d1f55',
  '#351e4b',
  '#2c1c41'
];

const paletteSequentialBlue = [
  '#e5f2f9',
  '#d1e5f5',
  '#afd3ed',
  '#91afd7',
  '#738bbf',
  '#3c5a9e',
  '#0c3183',
  '#132a68',
  '#10204c',
  '#0b193b',
  '#06142f',
  '#051228',
  '#061020'
];

const paletteSequentialLightBlue = [
  '#eff8fd',
  '#d9eff6',
  '#c2e5ef',
  '#a8dae8',
  '#90cbe4',
  '#76b8e1',
  '#5baddc',
  '#4d96cc',
  '#427ebc',
  '#3a67ab',
  '#324c88',
  '#29366b',
  '#1e2354'
];

const paletteSequentialBlueViolet = [
  '#edf7e7',
  '#c8e3d2',
  '#91cdbf',
  '#41b5ab',
  '#218ba4',
  '#145d94',
  '#0c3183',
  '#0d2d76',
  '#0d2a6a',
  '#0e265e',
  '#0d2253',
  '#0c1e47',
  '#0b1a3c'
];

const paletteSequentialTurquoise = [
  '#e2ecf6',
  '#cadfe6',
  '#b1d3d6',
  '#94c6c6',
  '#74b9b6',
  '#4caca6',
  '#00a096',
  '#008d89',
  '#007b7c',
  '#006a6f',
  '#005963',
  '#004a57',
  '#063b4c'
];

const paletteSequentialLightGreen = [
  '#faf9de',
  '#e9efc3',
  '#d7e4a7',
  '#c5d989',
  '#b1ce6a',
  '#9cc34c',
  '#84b92a',
  '#6fa32b',
  '#5a8f2a',
  '#477c29',
  '#346b27',
  '#205b24',
  '#074d21'
];

const paletteSequentialDarkGreen = [
  '#eaf3e5',
  '#c7d5be',
  '#a3ba9a',
  '#80a078',
  '#5c885a',
  '#357442',
  '#00632e',
  '#00592b',
  '#004e27',
  '#004423',
  '#033a1e',
  '#053019',
  '#052613'
];

const paletteSequentialGreenBrown = [
  '#f7eccd',
  '#d9cba6',
  '#bcad82',
  '#a29162',
  '#887946',
  '#716330',
  '#5b501f',
  '#51461d',
  '#483d1b',
  '#3f3418',
  '#362b15',
  '#2d2311',
  '#231a0d'
];

const paletteSequentialBrown = [
  '#f7eccd',
  '#eed3ab',
  '#e4bb89',
  '#dba269',
  '#ad7446',
  '#834d2c',
  '#5e2f19',
  '#552a18',
  '#4c2516',
  '#432113',
  '#3a1c11',
  '#32180f',
  '#29130b'
];

const paletteSequentialGrey = [
  '#e5e8ea',
  '#bdbfc3',
  '#999a9f',
  '#77797f',
  '#595c64',
  '#3e444c',
  '#253038',
  '#20282e',
  '#1a2024',
  '#15181b',
  '#0e1112',
  '#070808',
  '#000000'
];

const paletteSequentialVioletCb = [
  '#f4f3f9',
  '#e0dced',
  '#cbc6e0',
  '#b7b0d4',
  '#948cbf',
  '#706baa',
  '#4d4e98',
  '#484889',
  '#42427a',
  '#3d3c6c',
  '#37365e',
  '#313050',
  '#2c2a44'
];

const paletteSequentialPinkCb = [
  '#fbe5ee',
  '#f8ccd5',
  '#f4b2bc',
  '#f096a3',
  '#d56976',
  '#bc3f52',
  '#a50f38',
  '#951735',
  '#851b31',
  '#761d2e',
  '#671e2a',
  '#581d26',
  '#4a1c22'
];

const paletteSequentialBlueCb = [
  '#eaf6fc',
  '#cfe4f4',
  '#cfe4f4',
  '#91bfe3',
  '#6999bb',
  '#417797',
  '#065b78',
  '#11536b',
  '#174b5f',
  '#194354',
  '#1a3b49',
  '#1a343f',
  '#192d35'
];

const paletteSequentialGreenCb = [
  '#fff7d0',
  '#e9e09b',
  '#d1ca62',
  '#b7b623',
  '#9e9e28',
  '#88872a',
  '#72722a',
  '#676726',
  '#5c5c23',
  '#51511f',
  '#47471b',
  '#3d3d17',
  '#333413'
];

const paletteSequentialGreenBrownCb = [
  '#f2edde',
  '#d8d1c0',
  '#bfb699',
  '#a09778',
  '#837b5a',
  '#686141',
  '#4f4b2c',
  '#3e3e1f',
  '#2e3313',
  '#292d14',
  '#232613',
  '#1e2012',
  '#191a10'
];

const paletteDivergingSpectral1 = [
  '#98141f',
  '#ab332c',
  '#bf5040',
  '#d5705b',
  '#e4a57f',
  '#f3d6a6',
  '#f5f2b8',
  '#cfdbb1',
  '#a4c4a9',
  '#71ada1',
  '#4e868f',
  '#2e637d',
  '#06456c'
];

const paletteDivergingSpectral2 = [
  '#d43d4f',
  '#df564b',
  '#eb6d45',
  '#f08e53',
  '#f8b96f',
  '#fee08b',
  '#f5f2b8',
  '#d7e5b1',
  '#b5d7aa',
  '#8ec8a3',
  '#6abda3',
  '#4fa4b5',
  '#3489be'
];

const paletteDivergingSpectral3 = [
  '#651035',
  '#ae1143',
  '#c9314b',
  '#dd7257',
  '#eeb27a',
  '#feeb9e',
  '#f5f2b8',
  '#cadfba',
  '#96cabb',
  '#50b4bb',
  '#3eaecc',
  '#206791',
  '#0c2c63'
];

const paletteDivergingBrownTurquoise = [
  '#3f3128',
  '#683828',
  '#933624',
  '#d5705b',
  '#db9c5e',
  '#feeb9e',
  '#f5f2b8',
  '#cfdbb1',
  '#a4c4a9',
  '#71ada1',
  '#628f85',
  '#53746d',
  '#475b57'
];

const paletteDivergingOrangePink = [
  '#e7511e',
  '#eb6929',
  '#ee7f37',
  '#f29446',
  '#f9c083',
  '#ffe9c3',
  '#ffeee3',
  '#f9cfc1',
  '#f3a9ab',
  '#db6882',
  '#c71360',
  '#891953',
  '#4b1c47'
];

const paletteDivergingRedBlue = [
  '#b2172b',
  '#c4443e',
  '#d76a5a',
  '#ed937e',
  '#f4b8a2',
  '#fcdbc7',
  '#efefef',
  '#bfcad5',
  '#8ba7bc',
  '#4d87a5',
  '#3c7ca0',
  '#28729b',
  '#036896'
];

const paletteDivergingRedGrey = [
  '#b2172b',
  '#c54532',
  '#da6c3b',
  '#f29446',
  '#f8bc67',
  '#fee08b',
  '#efece5',
  '#c9c5c1',
  '#a5a19f',
  '#808080',
  '#666666',
  '#333333',
  '#000000'
];

const paletteDivergingOrangeViolet = [
  '#98141f',
  '#ab332c',
  '#f9bc47',
  '#fdcf66',
  '#fede8d',
  '#ffecb3',
  '#f9eff6',
  '#e8d0e3',
  '#a4c4a9',
  '#a973aa',
  '#834f96',
  '#622181',
  '#402357'
];

const paletteDivergingPurpleGreen = [
  '#59194b',
  '#85134b',
  '#c71360',
  '#db6882',
  '#eba7a8',
  '#fce0ca',
  '#faefe1',
  '#dbd9aa',
  '#b9c26e',
  '#94ad31',
  '#728b2b',
  '#546c25',
  '#39521f'
];

const paletteDivergingVioletGreen = [
  '#55296e',
  '#75408e',
  '#8a5fa0',
  '#a081b5',
  '#beadcf',
  '#ddd7e7',
  '#eae8ed',
  '#c1d4bc',
  '#93be86',
  '#58a951',
  '#3c853e',
  '#23662f',
  '#084a22'
];

const paletteDivergingRedGreen = [
  '#b2172b',
  '#c5403c',
  '#d96453',
  '#ef8972',
  '#f6b49c',
  '#fcdbc7',
  '#f9ebde',
  '#dad6a8',
  '#b9c16d',
  '#94ad31',
  '#728b2b',
  '#546c25',
  '#39521f'
];

const paletteDivergingBrownGreen = [
  '#735146',
  '#846454',
  '#977a65',
  '#aa9177',
  '#c2ad91',
  '#dbcaad',
  '#edebd6',
  '#c4d6aa',
  '#94bf7c',
  '#58a951',
  '#3c853e',
  '#23662f',
  '#084a22'
];

const palette_divergingLightBrownTurquoise = [
  '#8b5219',
  '#a46821',
  '#bf812c',
  '#cfa151',
  '#e2c489',
  '#f6e8c3',
  '#f5f1df',
  '#cbdccc',
  '#9cc6b9',
  '#60afa6',
  '#359790',
  '#1d7d75',
  '#00665e'
];
