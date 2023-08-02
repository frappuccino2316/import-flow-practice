import * as fs from 'fs';

import { pickup } from './pickup';

function main() {
  const content = fs.readFileSync('./sample/sample1.ts', 'utf-8');
  const importRows = pickup(content);
  importRows.forEach((r) => {
    console.log(r);
  });
}

main();
