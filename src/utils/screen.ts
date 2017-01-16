import {
  isNumeric, isPercentage
} from './functions';

import { select } from 'd3';

export function calculateWidth(widthConfig, selector) {
  if (widthConfig === 'auto') {
    return select(selector)
      .node()
      .getBoundingClientRect()
      .width;
  }
  else if (isNumeric(widthConfig)) {
    return widthConfig;
  }
  else if (isPercentage(widthConfig)) {
    let containerWidth, percentage;
    containerWidth = select(selector)
      .node()
      .getBoundingClientRect()
      .width;
    percentage = widthConfig.split('%')[0];
    return Math.round(percentage * containerWidth / 100);
  } else {
    throw Error('Unknow config width value: ' + widthConfig);
  }
}
