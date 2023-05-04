const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(express.json));

app.use('/', require('./router'));

app.use('/inicio', require('./router'));

app.listen(5000, ()=>{
    console.log('SERVER corriendo en http://localhost:5000');
});