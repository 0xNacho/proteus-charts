/**
 * Colors utility class. Provides scales for each color palette.
 */
class Colors {

  /**
   * Returns an ordinal scale for category1 palette.
   * @returns {*} D3 scale for category1 palette.
   */
  static getCategoricalScale(palette) {
    return d3.scale.ordinal().range(palette);
  }
}

/**
 * List of color palettes
 */

const palette_category1 = [
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

const palette_category2 = [
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

const palette_category3 = [
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

const palette_category4 = [
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

const palette_category5 = [
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

const palette_category6 = [
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

const palette_category7 = [
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

const palette_category8 = [
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

