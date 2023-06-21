function weightedStrings(s, queries) {
  const weights = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  }; // Pembobotan karakter
  const substrings = new Set(); // Set untuk menyimpan substring yang unik

  // Membangun set substrings
  for (let i = 0; i < s.length; i++) {
    let j = i;
    while (j < s.length && s[j] === s[i]) {
      substrings.add(s.substring(i, j + 1));
      j++;
    }
  }

  const result = [];

  // Memeriksa status dari setiap query
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    let found = false;

    // Memeriksa apakah query cocok dengan bobot karakter atau substring
    for (let substring of substrings) {
      const weight = substring.length * weights[substring[0]];
      if (query === weight) {
        result.push('Yes');
        found = true;
        break;
      }
    }

    // Jika tidak ada yang cocok, hasilnya adalah 'No'
    if (!found) {
      result.push('No');
    }
  }

  return result;
}

const s = 'abbcccd';
const queries = [1, 3, 9, 8];
const output = weightedStrings(s, queries);

console.log("-".repeat(40));
console.log('Case 1: Weighted String');
console.log("-".repeat(40));
console.log(output);