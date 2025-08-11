function repeatedSubstringPattern(s) {
  if (s.length <= 1) return false;

  const doubledString = s + s;
  const firstOccurrenceIndex = doubledString.indexOf(s, 1);

  return firstOccurrenceIndex !== -1 && firstOccurrenceIndex < s.length;
}

// Examples:
console.log(repeatedSubstringPattern('abab')); // true (substring "ab" repeated twice)
console.log(repeatedSubstringPattern('aba')); // false
console.log(repeatedSubstringPattern('abcabcabcabc')); // true (substring "abc" repeated four times)
console.log(repeatedSubstringPattern('a')); // false
console.log(repeatedSubstringPattern('')); // false
