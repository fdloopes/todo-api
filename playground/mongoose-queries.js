const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5bef14a8e2a6491d824c1e78";

if(!ObjectID.isValid(id)){
  console.log('Object not valid');
}

User.findById(id).then((user)=>{
  if(!user){
    console.log('User not found');
  }
  console.log(JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e.message));

// User.findByIdAndUpdate(id,{name:'Felipe'}).then((user)=>{
//   if(!user){
//     return console.log('Id not found');
//   }
//   console.log('User by id update',user);
// }).catch((e)=> console.log(e.message));


//
// Todo.find({
//   _id: id
// }).then((todos) =>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) =>{
//   console.log('Todo',todo);
// });
//
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by id',todo);
// }).catch((e) => console.log(e));
// */
