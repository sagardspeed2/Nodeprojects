const fs = require('fs');
const express = require('express');

const app = express();
app.listen(3000, () => console.log('listing on port: 3000'));
app.use(express.static('public'));

app.get('/search/:digits', (request, response) => {
    let search = request.params.digits;
    const index = indexOf(digits, search);
    response.send({
        'index': index -1
    });
})

const stream = fs.createReadStream('pi-million.txt');

let digits = '';

stream.on('data', chunk => {
    digits += chunk.toString();
})

function indexOf(txt, search) {
    let start = search.charAt(0);
  
    for (let i = 0; i < txt.length; i++) {
      if (txt.charAt(i) === start) {
        let found = true;
        for (let j = 1; j < search.length; j++) {
          if (txt.charAt(i+j) !== search.charAt(j)) {
            found = false;
            break;
          }
        }
        if (found) {
          return i;
        }
      }
    }
    
    return -1;
}

stream.on('end', () => {
    console.log('million digits loaded !');
})