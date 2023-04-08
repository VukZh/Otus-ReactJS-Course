// @ts-check
const config = {
  checkers: ["typescript"],
  tsconfigFile: "tsconfig.json",
  typescriptChecker: {
    "prioritizePerformanceOverAccuracy": true
  },
  mutate: ["src/**/*.ts"],
  jest: {
    projectType: 'custom',
    configFile: "jest.config.js",
    enableFindRelatedTests : false,
    "config": {
      "testEnvironment": "jest-environment-jsdom"
    },
  },
  testRunner: 'jest',
}
export default config;