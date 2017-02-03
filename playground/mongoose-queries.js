const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '589496faf5458be30582f3d811';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID invalid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

var id = '5894514effbba01404ef140b';
User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));
