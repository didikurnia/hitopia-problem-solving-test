# Hitopia Problem Solving Test
"Hitopia Problem Solving Test" is an assessment or examination designed to evaluate an individual's problem-solving skills and abilities. It is likely a test that measures a person's capacity to analyze complex situations, identify potential issues, and develop effective solutions.

# Code Repository Readme

This repository contains the following files and directories:

- `/index.html`: The main HTML file.
- `/src/weightedString.js`: JavaScript file for weighted string manipulation.
- `/src/highestPalindrome.js`: JavaScript file for finding the highest palindrome in a given number as example.
- `/src/balanceBracket.js`: JavaScript file for checking balanced brackets in a string.
- `/img/output-test-case-of-problem-solving-test.png`: An image file showing the result.

## How to Run the Code

To run the code in this repository, follow the steps below:

1. Clone the repository to your local machine.
    > git clone https://github.com/didikurnia/hitopia-problem-solving-test-
    
2. Open the `index.html` file in a web browser to see the main HTML page.

3. The JavaScript files can be run using a JavaScript runtime environment or a browser's developer console. Choose one of the following options:

- **Option 1: Using a JavaScript runtime environment**

  a. Open a command prompt or terminal.
  
  b. Navigate to the root directory of the cloned repository.
  
  c. Run the JavaScript files using a JavaScript runtime environment like Node.js.
     ```
     node src/weightedString.js
     node src/highestPalindrome.js
     node src/balanceBracket.js
     ```

- **Option 2: Using a browser's developer console**

  a. Open the `index.html` file in a web browser.
  
  b. Open the browser's developer console (usually accessible through the browser's developer tools).
  
  c. Use the console to execute JavaScript code.

Note: 
- Make sure you have a compatible JavaScript runtime environment or a web browser with a developer console installed.
- The code that I made is not 100% homemade, I'm looking for some references on several websites. so please take it into consideration

# Penjelasan Soal No 3

Kompleksitas kodingan ini adalah O(n), di mana n adalah panjang dari ekspresi tanda kurung. Hal ini karena kita hanya melintasi ekspresi sekali dalam loop for dengan n iterasi. Setiap operasi dalam loop memiliki kompleksitas waktu konstan.

- Jumlah karakter dalam ekspresi adalah 12.
- Ketika kita melintasi ekspresi, kita akan menambahkan karakter-karakter bukaan - ({, (, [) ke dalam stack.
- Kemudian saat kita menemukan karakter penutup (}, ), ]), kita memeriksa apakah - karakter penutup ini cocok dengan karakter pembuka terakhir di stack.
- Jumlah operasi dalam sampel ini adalah 12 (n), yang merupakan panjang ekspresi.