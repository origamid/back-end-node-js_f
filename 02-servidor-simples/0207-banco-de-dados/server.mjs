import { createServer } from 'node:http';
import { Router } from './router.mjs';
import { customRequest } from './custom-request.mjs';
import { customResponse } from './custom-response.mjs';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';

const router = new Router();

router.post('/produtos', async (req, res) => {
  const { categoria, slug } = req.body;
  try {
    await mkdir(`./produtos/${categoria}`);
  } catch {
    // console.log(`${categoria}, já criada`);
  }
  try {
    await writeFile(
      `./produtos/${categoria}/${slug}.json`,
      JSON.stringify(req.body),
    );
    res.status(201).json(`${slug} criado.`);
  } catch {
    res.status(500).end('Erro.');
  }
});

router.get('/produtos', async (req, res) => {
  try {
    const listaArquivos = await readdir('./produtos', { recursive: true });
    const arquivosJson = listaArquivos.filter((item) => item.endsWith('.json'));
    const promises = [];
    for (const arquivo of arquivosJson) {
      const conteudo = readFile(`./produtos/${arquivo}`, 'utf-8');
      promises.push(conteudo);
    }
    const conteudos = await Promise.all(promises);
    const produtos = conteudos.map(JSON.parse);
    res.status(200).json(produtos);
  } catch {
    res.status(500).end('Erro.');
  }
});

router.get('/produto', async (req, res) => {
  const categoria = req.query.get('categoria');
  const slug = req.query.get('slug');
  try {
    const conteudo = await readFile(
      `./produtos/${categoria}/${slug}.json`,
      'utf-8',
    );
    const produto = JSON.parse(conteudo);
    res.status(200).json(produto);
  } catch {
    res.status(404).json('Não encontrado.');
  }
});

const server = createServer(async (request, response) => {
  const req = await customRequest(request);
  const res = customResponse(response);

  const handler = router.find(req.method, req.pathname);
  if (handler) {
    handler(req, res);
  } else {
    res.status(404).end('Não encontrada');
  }
});

server.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});
