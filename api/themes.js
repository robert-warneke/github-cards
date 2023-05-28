const languages = require('./languages.js');

const getLangDotColor = (lang) => {
  return languages[lang] ? languages[lang].color : '#a6a6a6';
};

const themes = {
  dark: (lang) => ({ 
    background: '#212121', 
    border: '#8ab4f8', 
    title: '#8ab4f8', 
    description: '#f5f5f5', 
    dataText: '#8ab4f8', 
    icon: '#9e9e9e',
    langDot: getLangDotColor(lang)
  }),
  light: (lang) => ({ 
    background: '#f5f5f5', 
    border: '#8ab4f8', 
    title: '#1a0dab', 
    description: '#333333', 
    dataText: '#1a0dab', 
    icon: '#9e9e9e',
    langDot: getLangDotColor(lang)
  }),
  straightBlack: (lang) => ({ 
    background: '#000000', 
    border: '#ffffff', 
    title: '#ffffff', 
    description: '#ffffff', 
    dataText: '#ffffff', 
    icon: '#ffffff',
    langDot: '#ffffff'
  }),
  straightWhite: (lang) => ({ 
    background: '#ffffff', 
    border: '#000000', 
    title: '#000000', 
    description: '#000000', 
    dataText: '#000000', 
    icon: '#000000',
    langDot: '#000000'
  }),
  terminal: (lang) => ({ 
    background: '#000000', 
    border: '#39ff14', 
    title: '#39ff14', 
    description: '#39ff14', 
    dataText: '#39ff14', 
    icon: '#39ff14',
    langDot: '#39ff14'
  }),
  warneke: (lang) => ({
    background: '#554dc7',
    border: '#b4e8e6',
    title: '#ffffcc',
    description: '#f5f5f5',
    dataText: '#ffffcc',
    repoIcon: '#ffd6e0',
    licenseIcon: '#b4e8e6',
    starIcon: '#ffffcc',
    watchIcon: '#ffffcc',
    forkIcon: '#ffffcc',
    langDot: '#e0cc66',
  }),
  // ...any other themes you want to define
};

module.exports = themes;
