const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [],
};

module.exports = async function () {
  const makeConfig = await createJestConfig(customJestConfig);
  const finalJestConfig = await makeConfig();

  finalJestConfig.transformIgnorePatterns[0] =
    '/node_modules/(?!@react-dnd|react-dnd|dnd-core|react-dnd-html5-backend/)';

  return finalJestConfig;
};
