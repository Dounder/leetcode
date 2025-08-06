// Submitted version
// function mergeAlternately(word1: string, word2: string): string {
//   let mergedWord = '';
//   const maxLength = Math.max(word1.length, word2.length);

//   for (let index = 0; index < maxLength; index++) {
//     if (word1[index]) mergedWord += word1[index];
//     if (word2[index]) mergedWord += word2[index];
//   }

//   return mergedWord;
// }

// Improved version
function mergeAlternately(word1: string, word2: string): string {
  let w = '';
  let p1 = 0;
  let p2 = 0;

  while (p1 < word1.length || p2 < word2.length) {
    if (p1 < word1.length) w += word1[p1];
    if (p2 < word2.length) w += word2[p2];
    p1++;
    p2++;
  }

  return w;
}
