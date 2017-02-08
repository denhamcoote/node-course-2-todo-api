var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// let db = {
//   localhost: 'mongodb://localhost:27017/TodoApp',
//   mlab: 'mongodb://todo:t0d0@ds135089.mlab.com:35089/todo-app-api'
// }
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
