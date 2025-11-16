const produtosResp = await fetch('http://localhost:3000/produtos');
const produtos = await produtosResp.json();
console.log(produtos);
console.log(produtosResp);

// const notebookResp = await fetch(
//   'http://localhost:3000/produto?categoria=eletronicos&slug=notebooks',
// );
// console.log(notebookResp);
// const notebook = await notebookResp.json();
// console.log(notebook.preco);

const response = await fetch('http://localhost:3000/produtos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    nome: 'Notebook',
    slug: 'notebook',
    categoria: 'eletronicos',
    preco: 5000,
  }),
});
const body = await response.text();

console.log(body);
console.log(response);

await fetch('http://localhost:3000/produtos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    nome: 'Mesa',
    slug: 'mesa',
    categoria: 'moveis',
    preco: 2000,
  }),
});

await fetch('http://localhost:3000/produtos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    nome: 'Mouse',
    slug: 'mouse',
    categoria: 'eletronicos',
    preco: 200,
  }),
});
