module.exports = {
  siteTitle: 'Tomas Roaldsnes | Business Designer',
  siteDescription: 'Tomas Roaldsnes is a business designer based in Oslo, Norway',
  siteKeywords:
    'Tomas Roaldsnes, business designer, business developer, founder of Amiroh, entrepreneur, innovation, design, tech, blockchain',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Tomas Roaldsnes',
  location: 'Oslo, Norway',
  email: 'tomroa@protonmail.com',
  github: 'https://github.com/tomasroaldsnes/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/tomasroaldsnes/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/tomas-roaldsnes-4b754bb3/',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@tomasroaldsnes',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/tommyroadsneeze',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/tomasutenh',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: 'tomasutenh',
  googleAnalyticsID: 'UA-45666519-2',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
