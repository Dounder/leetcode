// function findTheDifference(s: string, t: string): string {
//   if (s.length < 0) throw new Error('String must be a positive number');
//   if (s.length >= 1000) throw new Error('String must be lower than 1000');
//   if (t.length !== s.length + 1) throw new Error('Invalid parameters format, t must be s.length + 1');

//   if (s.length === 0) return t;

//   let d: string = '';

//   for (let i = 0; i < t.length; i++) {
//     console.log('t', t[i]);
//     for (let j = 0; j < s.length; j++) {
//       console.log('s', s[j]);
//       // if (s[j] === t[i]) break;
//       if (s[j] !== t[i]) d = t[i];
//     }
//   }

//   return d;
// }

function findTheDifference(s: string, t: string): string {
  if (s.length < 0) throw new Error('String must be a positive number');
  if (s.length >= 1000) throw new Error('String must be lower than 1000');
  if (t.length !== s.length + 1) throw new Error('Invalid parameters format, t must be s.length + 1');

  let xor = 0;
  for (let i = 0; i < s.length; i++) xor ^= s.charCodeAt(i);
  for (let i = 0; i < t.length; i++) xor ^= t.charCodeAt(i);

  return String.fromCharCode(xor);
}

console.log(findTheDifference('abcd', 'abcde'));
console.log(findTheDifference('', 'y'));
console.log(findTheDifference('a', 'aa'));
