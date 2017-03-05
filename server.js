const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const webpack = require('webpack');
const webpackCompiler = webpack(require('./webpack.config.js'));
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

const loadTodos = () => JSON.parse(fs.readFileSync('./db.json', 'utf8'));
const saveTodos = (todos) => fs.writeFileSync('./db.json', JSON.stringify(todos) ,'utf8');

app.get('/api/todos', (req, res) => {
  res.json(loadTodos());
});

app.post('/api/todos/update/:id', function(req, res) {
  if (req.body.isCompleted) {
   req.body.isCompleted = (req.body.isCompleted == "true" || req.body.isCompleted == true);
  }

  let todos = loadTodos();
  Object.assign(todos[req.params.id - 1], req.body);
  saveTodos(todos);

  res.send(`Update todo id ${req.params.id} success`);
});

app.use(require('webpack-dev-middleware')(webpackCompiler, {
  noInfo: true,
  publicPath: `http://localhost:${port}/dist`
}));

app.use(express.static('.'));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is listening at http://localhost:${port}`);
});
