#!/usr/bin/env node
// const clearConsole = require('./utils/clear-console');
// const pkgJson = require('./package.json');
import {spawn} from 'child_process';
// clearConsole();
// console.log(`
// NAME: - ${pkgJson.name}
// VERSION: - ${pkgJson.version}
// DESCRIPTION: - ${pkgJson.description}
// `);
function executeBashScript(path) {
    const pathToDockerScript = new URL(path, import.meta.url).pathname;
    const child = spawn(pathToDockerScript);
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', (chunk) => {
      console.log(chunk);
    });
    child.on('close', console.log);
    child.on('error', console.error);
  }
  process.env.CLIENT_BUILD_DIR = '/home/vikash/vip-go-skeleton/';
  process.env.PROJECT_NAME = 'test1';
  executeBashScript('./run.sh');