const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const arr= ['hello','world','test'];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(reg,res) => res.render('index',{arr:arr}));

app.get('/create',(reg,res) => res.render('create'));
    app.post('/create',(reg,res) => {
    arr.push(reg.body.text);
    res.redirect('/');
});

app.listen(3000,() => console.log('example app'));