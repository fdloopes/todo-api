

const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(error,client)=>{
  if(error){
    return console.log('Unable to connect to MongoDB server',error);
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // Delete Many
  db.collection('Users').deleteMany({age:21}).then((result)=>{
    console.log('Delete Many Users');
    console.log(`Deletados: ${docs.result.n}`);
  },(error)=>{
    console.log(error);
  });

  // Delete one
  // db.collection('Users').deleteOne({age:21}).then((docs)=>{
  //   console.log('Delete one user');
  //   console.log(`Deletados: ${docs.result.n}`);
  // },(error)=>{
  //     console.log("Erro: ",error);
  // });

  // Find one and delete
  // db.collection('Users').findOneAndDelete({age:21}).then((docs)=>{
  //   console.log('Find one and delete');
  //   console.log(JSON.stringify(docs.value,undefined,2));
  // },(error)=>{
  //   console.log("Erro: ",error);
  // });



  client.close();
});
