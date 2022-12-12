module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*ts'],
  coverageDirectory: 'coverage',
  testEnviroment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
