const colors = Object.freeze({
  bodyBackgroundColor: '#EFF0F3',
  barsBackgroundColor: '#F9F9F9',
  actionColor: '#24CE84',
  primaryColor: '#5890FF'
});

const sizes = Object.freeze({
  statusBar: 20, // not 22?
  navigationBar: 44,
  tabBar: 49
});

const flags = Object.freeze({
  'it': '🇮🇹',
  'es': '🇪🇸',
  'en': '🇺🇸',
  'de': '🇩🇪',
  'ru': '🇷🇺',
  'fr': '🇫🇷'
});

const intervals = Object.freeze({
  second: 1000,
  minute: 60000, // 60 * 1000
  hour: 3600000, // 60 * 60 * 1000
  day: 86400000 // 24 * 60 * 60 * 1000
});

const constants = Object.freeze({
  colors,
  sizes,
  flags,
  intervals
});

export { colors, sizes, flags, intervals };
export default constants;
