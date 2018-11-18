
const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

const todos = [{
  text:'First text todo'
},{
  text:'Second text todo'
},{
  text:'Thirty text todo'
}];

beforeEach((done) => {
  Todo.deleteMany({}).then(()=>{
    return Todo.insertMany(todos);
  }).then(()=> done());
});

describe('POST /todos',()=>{
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app).post('/todos').send({text}).expect(200).expect((res)=>{
      expect(res.body.text).toBe(text);
    }).end((error,res)=>{
      if(error){
        return done(error);
      }
      Todo.find({text}).then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((error)=>{
        done(error);
      });
    });
  });

  it('should not create todo with invalid ', (done) => {
    request(app).post('/todos').send({}).expect(400).end((error,red)=>{
      if(error){
        return done(error);
      }
      Todo.find().then((todos)=>{
        expect(todos.length).toBe(3);
        done();
      }).catch((error)=>{
        done(error);
      });
    });
  });
});

describe('GET /todos',()=>{
  it('should get all todos', (done) => {
    request(app).get('/todos').expect((res)=>{
      expect(res.body.todos.length).toBe(3);
    }).end(done);
  });
});
