const express = require('express')
const path = require('path')


const app = express()


const PORT  = 3000

app.use(express.json());

app.get('/', (req, res) => {

    const data = {
        1:"",
        2:"/week5"
    }
    res.send(data)
});


app.get('/week5', (req, res) => {
    const filePath = path.join(__dirname, 'Files/test.html');
    res.sendFile(filePath);
});


app.listen(PORT, () => {
    console.log(`Server listening on http://127.0.0.1:${PORT}`);
  });
  