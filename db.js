const mongoose = require('mongoose');

var mongoURL= "mongodb+srv://adekola:oluwaseeni@cluster0.dz9u06q.mongodb.net/crownkayRooms";

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser:true});

var connection = mongoose.connection;

connection.on('error', ()=> {
  console.log("Mongodb connectiion failed")
});

connection.on('connected', ()=>{
  console.log('Mongodb connection Successful');
});

module.exports = mongoose;