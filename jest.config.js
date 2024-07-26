
module.exports = {
    testEnvironment: 'jsdom',
    verbose: true,
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.(js|jsx)$': ['babel-jest', { configFile: './babel.jest.config.json' }],
    },
    moduleNameMapper: {
        '\\.css$': ['identity-obj-proxy', {}]
    }
}
