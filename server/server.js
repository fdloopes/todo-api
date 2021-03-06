
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text:req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(error)=>{
    res.status(400).send(error);
  });
});

app.post('/user',(req,res)=>{
  var user = new User({
    email:req.body.email,
    name:req.body.name,
    senha:req.body.senha
  });

  user.save().then((doc)=>{
    res.send(doc);
  },(error)=>{
    res.status(400).send(error);
  });
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(error)=>{
    res.status(400).send(error);
  });
});

app.get('/todos/:id',(req,res) =>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.status(200).send({todo});
  }).catch((e)=>{
    res.status(400).send();
  });
});

app.get('/user',(req,res)=>{
  User.find().then((users)=>{
    res.send({users});
  },(error)=>{
    res.status(400).send(error);
  });
});

app.get('/user/:id',(req,res) =>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  User.findById(id).then((user)=>{
    if(!user){
      return res.status(404).send();
    }
    res.status(200).send({user});
  }).catch((e)=>{
    res.status(400).send();
  });
});

app.delete('/todos',(req,res)=>{
  Todo.deleteOne({
    text:req.body.text
  }).then((result)=>{
    if(result.n>0){
      res.send('Informação deletada');
    }else{
      res.send('text not find');
    }
  },(error)=>{
    res.status(400).send(error);
  });
});

app.delete('/user',(req,res)=>{
    User.deleteOne({
      email:req.body.email
    }).then((result)=>{
      if(result.n>0){
        res.send('Usuário deletado');
      }else{
        res.send('Email não encontrado');
      }
    },(error)=>{
      res.status(400).send(error);
    });
});

app.delete('/todos/:id',(req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.status(200).send({todo});
  }).catch((error)=>{
    res.status(400).send();
  });
});

app.delete('/user/:id',(req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  User.findByIdAndRemove(id).then((user)=>{
    if(!user){
      return res.status(404).send();
    }
    res.status(200).send({user});
  }).catch((error)=>{
    res.status(400).send();
  });
});

app.listen(port, ()=>{
  console.log(`Started on port ${port}`);
});

module.exports = {app};
