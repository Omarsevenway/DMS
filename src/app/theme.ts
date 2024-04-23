const primary =  '#0D8A72';
const success =  '#37bc7f';
const info =  '#189be3';
const warning =  '#ffb94d';
const danger =  '#ef6454';

export const LIGHT_THEME = {
  name: 'light',
  base: 'default',
  variables: {
    primary,
    success,
    info,
    warning,
    danger,
    charts: {
      primary,
      success,
      info,
      warning,
      danger,
      bg: 'transparent',
      textColor: '#293455',
      axisLineColor: '#818894',
      splitLineColor: '#ACB3BE',
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: '#CDD5DE',
      areaOpacity: '0.7',
    },
    bubbleMap: {
      primary,
      success,
      info,
      warning,
      danger,
      titleColor: '#293455',
      areaColor: '#ACB3BE',
      areaHoverColor: '#818894',
      areaBorderColor: '#CDD5DE',
    },
  },
};
