import { spawn } from 'node:child_process';
import { once } from 'node:events';

const child = spawn('ls', ['-all']);
const output = await child.stdout.toArray();
console.log(output.toString());

await once(spawn('mkdir', ['teste']), 'close');
spawn('cp', ['sub.ts', './teste/sub-teste.ts']);
