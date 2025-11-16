function string(x: unknown) {
  if (typeof x !== 'string' || x.trim().length === 0) return undefined;
  return x;
}

function number(x: unknown) {
  if (typeof x === 'number') return Number.isFinite(x) ? x : undefined;
}

function boolean(x: unknown) {
  if (x === true || x === 'true' || x === 1 || x === '1' || x === 'on')
    return true;
  if (x === false || x === 'false' || x === 0 || x === '0' || x === 'off')
    return false;
  return undefined;
}

function cpf(x: string) {
  return x.replace(/\D+/g, '');
}

console.log(cpf('146.104.560-60'));

const a = `é`.normalize('NFC');
const b = `e\u0301`.normalize('NFC');

console.log(a === b);
console.log(b);

function removeZw(x: string) {
  return x.replace(/[\u200B-\u200D\u2060\uFEFF]/g, '');
}

console.log(removeZw('A\u200B\u200B\u200B'.trim()).normalize('NFC').length);
