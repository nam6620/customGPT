const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const cors = require('cors');


const app = express()

const port = 3000



app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.use(cors())


app.engine(
  'hbs',
  engine({
    extname: 'hbs',
  }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'recources/views'));

route(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})