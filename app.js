const express = require('express')
const app = express()
const path = require('path');
const hbs = require('express-handlebars');


// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
    res.render('index', { title: 'Cool, huh!', date : new Date() });
});


app.get('/offline/', function(req, res, next) {
    res.render('offline', { title: 'Offline !', date : new Date() });
});


app.get('/article/:id', function(req , res){
    res.render('articles', { title: `Articles ${req.params.id}`, date : new Date() });
});
  

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
  
  