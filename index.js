require('dotenv').config();

const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const crudRouter = require('./routes/crudRouter');

app.use('/', crudRouter);

app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));





mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


let db = mongoose.connection;
db.on('error', ()=> {
    console.log('Erro na conexão');
})

db.once('open', ()=> {
    console.log('Conexão efetuada com sucesso');
})






app.listen(process.env.PORT, ()=> {
  console.log(`Application running on port ${process.env.PORT}`);
})