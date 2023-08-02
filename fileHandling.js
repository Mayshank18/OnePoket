import { readFile } from 'fs';

function countWordsInFile(fileName) {
  readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
    } else {
      const wordCount = data.split(/\s+/).length;
      console.log(`Total word count: ${wordCount}`);
    }
  });
}
const fileName = 'sampleText.txt';
countWordsInFile(fileName);