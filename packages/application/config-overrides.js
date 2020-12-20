const {
    removeModuleScopePlugin,
    override,
    babelInclude,
    addWebpackAlias,
} = require('customize-cra');
const path = require('path');
const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = override(
    removeModuleScopePlugin(),
    addWebpackAlias({
        ['@components']: path.resolve(__dirname, '../components'),
    }),
    babelInclude([
        path.resolve('src'), // make sure you link your own source
        path.resolve('../components'),
    ]),
    alias(configPaths('./tsconfig.paths.json'))
);
