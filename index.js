const express = require('express');
const path = require('path');

const app = express();

// ambil dari React app
app.use(express.static(path.join(__dirname, 'client/build')));

// ambil Daftar list
app.get('/api/getList', (req,res) => {
    var list = ["Arif", "Agus", "Ibrahim"];
    res.json(list);
    console.log('Sent list of items');
});

// mungkin masalahnya disini.....???????????????????????????????????????????????????
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);