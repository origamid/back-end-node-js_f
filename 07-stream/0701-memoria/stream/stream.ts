import { readFile } from 'node:fs/promises';

const files = [];

for (let i = 0; i < 10; i++) {
  files.push(await readFile('./entrada.txt'));
}

setTimeout(() => {}, 20000);
