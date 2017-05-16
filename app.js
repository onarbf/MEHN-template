var express    = require('express');
var exphbs     = require('express-handlebars');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');

//añadir las rutas
var indexRoutes = require('./controllers/index-routes.js');

//conectar a mongodb
//acuerdate de arrancarlo con mongod --dbpath ~/mongo-data/db
mongoose.connect('mongodb://localhost/forocochesio');

/* ALL APP DOWN HERE */var app = express();

//redireccionar las rutas
app.use('/',indexRoutes);

//para poder captar los http POST
app.use(bodyParser.urlencoded({ extended: false }))
// lo mismo para los JSON
app.use(bodyParser.json())

//seleccionar express-handlebars como el sistema de vistas
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.listen(3000,()=>{
  console.log('Server running on port 3000');
})
