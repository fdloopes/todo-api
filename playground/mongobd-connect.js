
//const {MongoClient, ObjectID} = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
//var obj = new ObjectID();
//console.log(obj);

var user = {name:'Ana',age:21};

MongoClient.connect('mongodb://localhost:27017/mongodb-banco',{ useNewUrlParser: true },(error,client)=>{
  if(error){
    return console.log('Unable to connect to MongoDB server',error);
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Users').insertOne(
    user,(error,result)=>{
      if(error){
        return console.log('Unable to insert todo',error);
      }
      console.log(JSON.stringify(result.ops,undefined,2));
    }
  );

  /*db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  },(error,result)=>{
    if(error){
    return console.log('Unable to insert todo',error);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });*/

/*  db.collection('Users').insertOne({
    name: 'Felipe',
    age: 27,
    location: 'Pelotas'
  },(error,result)=>{
    if(error){
      return console.log('Unable to insert to do',error);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
    console.log(result.ops[0]._id.getTimestamp());
  });*/

  //db.collection('User')inse

  client.close();
});
