import fs from 'node:fs/promises';
import fsCallback from 'node:fs';

fsCallback.readFile('./produtos/notebook.json', 'utf-8', (error, arquivo) => {
  console.log(arquivo);
});

const dados2 = fsCallback.readFileSync('./produtos/notebook.json', 'utf-8');
console.log('dados2', dados2);

try {
  await fs.mkdir('./produtos');
} catch {
  console.log('Pasta já existe');
}

// fs.writeFile('./produtos/notebook.json', JSON.stringify({ nome: 'Notebook' }));

const dados = await fs.readFile('./produtos/notebook.json', 'utf-8');

const dir = await fs.readdir('./produtos', { recursive: true });
console.log(dir);
console.log(dir.filter((file) => file.endsWith('.txt')));

console.log(dados);
