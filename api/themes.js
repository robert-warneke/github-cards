const languages = require('./languages.js');

const getLangDotColor = (lang) => {
  return languages[lang] ? languages[lang].color : '#a6a6a6';
};

const themes = {
  dark: (lang = 'Default') => ({ 
    background: '#212121', 
    border: '#8ab4f8', 
    titleText: '#8ab4f8', 
    descriptionText: '#f5f5f5', 
    dataText: '#8ab4f8', 
    icon: '#9e9e9e',
    langDot: getLangDotColor(lang),
    text: '#f5f5f5',
  }),
  light: (lang = 'Default') => ({ 
    background: '#f5f5f5', 
    border: '#8ab4f8',
    titleText: '#1a0dab', 
    descriptionText: '#333333', 
    dataText: '#1a0dab', 
    icon: '#9e9e9e',
    langDot: getLangDotColor(lang),
    text: '#333333',
  }),
  straightBlack: (lang = 'Default') => ({ 
    background: '#000000', 
    border: '#ffffff',
    text: '#ffffff', 
    icon: '#ffffff',
    langDot: '#ffffff'
  }),
  straightWhite: (lang = 'Default') => ({ 
    background: '#ffffff', 
    border: '#000000', 
    text: '#000000',
    icon: '#000000',
    langDot: '#000000'
  }),
  terminal: (lang = 'Default') => ({ 
    background: '#000000', 
    border: '#39ff14', 
    text: '#39ff14', 
    icon: '#39ff14',
    langDot: '#39ff14'
  }),
  warneke: (lang = 'Default') => ({
    background: '#554dc7',
    border: '#b4e8e6',
    titleText: '#fffbb3',
    descriptionText: '#f5f5f5',
    dataText: '#ffffcc',
    repoIcon: '#a1ffc6',
    licenseIcon: '#a1ffc6',
    starIcon: '#fffbb3',
    watchIcon: '#fffbb3',
    forkIcon: '#fffbb3',
    langDot: '#ff69b4',
  }),
  // ...any other themes you want to define
};

module.exports = themes;
