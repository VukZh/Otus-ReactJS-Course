module.exports = {
  moduleNameMapper: {
    '\\.(png|css)$': '<rootDir>/path-to-fileMock.js',
  },
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
};
