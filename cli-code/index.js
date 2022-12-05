#!/usr/bin/env node
const clearConsole = require('./utils/clear-console');
const pkgJson = require('./package.json');
clearConsole();
console.log(`package name - ${JSON.stringify(pkgJson)}`);