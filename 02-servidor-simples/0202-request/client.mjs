const response = await fetch(
  'http://localhost:3000/produtos?cor=verde&tamanho=g',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'andre', password: '123456' }),
  },
);

const body = await response.text();

console.log(body);
