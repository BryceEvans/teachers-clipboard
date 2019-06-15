const mongoose = require('mongoose')
mongoose.Promise = global.Promise

  //Local Connection
  // function connect() {
  //     mongoose.set('debug', true);

  //     //If no db, one will be created
  //     const url = 'mongodb://localhost:27017/TeacherClipsx';

  //     return mongoose.connect(url, 
  //     { 
  //         useNewUrlParser: true,    
  //     })
  //         .then(() => console.log('Connection to Localhost successful'))
  //         .catch((err) => console.error("Connection to Localhost UNSUCCESSFUL", err));
  // }


  //COSMOS DB CONNECTION
  function connect() {
      mongoose.set('debug', true);
      // console.log('process.env.COSMOSDB_CONNSTR:', process.env.COSMOSDB_CONNSTR)
      return mongoose.connect(process.env.COSMOSDB_CONNSTR, 
      { 
          // useCreateIndex: true, 
          //WHEN NEW PARSER IS SET TO TRUE RETURNS DB MUST BE A STRING
          useNewUrlParser: false, 
          auth: {
                user: process.env.COSMODDB_USER,
                password: process.env.COSMOSDB_PASSWORD
              }        
      })
          .then(() => console.log('Connection to Cosmos successful'))
          .catch((err) => console.error("Connection to Cosmos UNSUCCESSFUL", err));
  }


  module.exports = {
    connect,
    mongoose
  };


