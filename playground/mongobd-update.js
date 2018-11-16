

const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/mongodb-banco',{ useNewUrlParser: true },(error,client)=>{
  if(error){
    return console.log('Unable to connect to MongoDB server',error);
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    name:'Felipe'
  },{
    $set:{
      name:'Pedro'
    }, $inc:{
      age: 1
    }
  },{
      returnOriginal: false
    }).then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
  },(error)=>{
    console.log(error);
  });



  client.close();
});
