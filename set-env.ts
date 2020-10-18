import { writeFile } from 'fs';
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';
// Load node modules
const colors = require('colors');
require('dotenv').config();   // load NODE env variables from .env

console.log('process.env.PORT :>> ', process.env.PORT);

console.log('process.argv[2] :>> ', process.argv[2]);

const envConfigFile = `export const environment = {
  production: false,
  apiPort: ${process.env.npm_package_config_serverPort},
  port: ${process.env.npm_package_config_angularPort}
};
`;

console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));
writeFile(targetPath, envConfigFile,  (err) => {
  if (err) {
    throw console.error(err);
  } else {
    console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
  }
});
