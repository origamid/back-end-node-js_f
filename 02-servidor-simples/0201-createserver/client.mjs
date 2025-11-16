const response = await fetch('http://localhost:3000/kjdksa', {
  method: 'POST',
});

const body = await response.text();

console.log(body);
