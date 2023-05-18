const plantData = [
  {
    id: 1,
    name: 'Orchidėja',
    image: require('./assets/orchid.jpg'),
    description: 'Egzotiška kambarinė gėlė.',
    wateringInstructions: 'Laistykite augalą kas 1 ar 2 savaites, tačiau svarbu stebėti šaknis – kai jos pilkšvos, gėlė yra ištroškusi',
    lightRequirements: 'Mėgsta daug netiesioginės saulės šviesos',
  },
  {
    id: 2,
    name: 'Gebenė',
    image: require('./assets/devilsIvy.jpg'),
    description: 'Vijoklinis augalas.',
    wateringInstructions: 'Laistyti kas savaitę, žiemą - kas dvi.',
    lightRequirements: 'Mėgsta daug netiesioginės saulės šviesos, tačiau tinka ir prieblanda.',
  },
  // Add more plant objects as needed
];

export default plantData;
