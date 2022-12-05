#!/usr/bin/env node
const clearConsole = require('./utils/clear-console');
const pkgJson = require('./package.json');
clearConsole();
console.log(`
NAME: - ${pkgJson.name}
VERSION: - ${pkgJson.version}
DESCRIPTION: - ${pkgJson.description}
`);