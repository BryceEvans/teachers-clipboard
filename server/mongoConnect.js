const mongoose = require('mongoose')
mongoose.Promise = global.Promise

  //COSMOS DB CONNECTION EXAMPLE
  function connect() {
      mongoose.set('debug', true);
      const url = 'mongodb://localhost:27017/TeacherClips';

      return mongoose.connect(url, 
      { 
          // useCreateIndex: true, 
          useNewUrlParser: false,    
      })
          .then(() => console.log('Connection to Localhost successful'))
          .catch((err) => console.error("Connection to Localhost UNSUCCESSFUL", err));
  }



// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');

// // Connection URL
// var url = 'mongodb://localhost:27017/TeacherClip';
// // Use connect method to connect to the Server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");

//   db.close();
// });


  
  module.exports = {
    connect,
    mongoose
  };



  // //COSMOS DB CONNECTION EXAMPLE
  // function connect() {
  //     mongoose.set('debug', true);
  //     // console.log('process.env.MSI_COSMOSDB_CONNSTR:', process.env.MSI_COSMOSDB_CONNSTR)
  //     return mongoose.connect(process.env.MSI_COSMOSDB_CONNSTR, 
  //     { 
  //         // useCreateIndex: true, 
  //         //WHEN NEW PARSER IS SET TO TRUE RETURNS DB MUST BE A STRING
  //         useNewUrlParser: false, 
  //         auth: {
  //               user: process.env.MSI_COSMODDB_USER,
  //               password: process.env.MSI_COSMOSDB_PASSWORD
  //             }        
  //     })
  //         .then(() => console.log('Connection to MSI Cosmos successful'))
  //         .catch((err) => console.error("Connection to MSI Cosmos UNSUCCESSFUL", err));
  // }