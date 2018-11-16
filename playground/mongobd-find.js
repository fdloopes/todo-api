
const {MongoClient, ObjectID} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;
//var obj = new ObjectID();
//console.log(obj);

var user = {name:'Paula',age:21};

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(error,client)=>{
  if(error){
    return console.log('Unable to connect to MongoDB server',error);
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Users').find({name:'Felipe'}).toArray().then((docs)=>{
  //   console.log('Users');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(error)=>{
  //     console.log(error);
  // });

  db.collection('Users').find({age:21}).count().then((count)=>{
    console.log('Users');
    console.log(count);
  },(error)=>{
      console.log(error);
  });

  client.close();
});
