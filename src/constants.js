const colors = Object.freeze({
  bodyBackgroundColor: '#EFF0F3',
  barsBackgroundColor: '#F9F9F9',
  actionColor: '#24CE84'
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
})

const constants = Object.freeze({
  colors,
  sizes,
  flags
});

export { colors, sizes, flags };
export default constants;
