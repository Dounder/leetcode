// function strStr(haystack: string, needle: string): number {
//   let oc = -1;
//   let s = 0;
//   let e = 0;

//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === needle[0]) {
//       s = i;
//       for (let j = 0; j < needle.length; j++) {
//         e = i + j;
//         if (haystack[i + j] !== needle[j]) break;
//       }
//     }

//     if (haystack.slice(s, e + 1) === needle) {
//       oc = s;
//       break;
//     }
//   }

//   return oc;
// }

function strStr(haystack: string, needle: string): number {
  if (needle === '') return 0;

  for (let k = 0; k <= haystack.length - needle.length; k++) {
    if (haystack.slice(k, k + needle.length) === needle) {
      return k;
    }
  }

  return -1;
}

console.log(strStr('sadbutsad', 'sad'));
console.log();
console.log(strStr('leetcode', 'leeto'));
console.log();
console.log(strStr('aaaaa', 'bba'));
console.log();
console.log(strStr('mississippi', 'issip'));
