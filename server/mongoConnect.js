const mongoose = require('mongoose')
mongoose.Promise = global.Promise

  //Local Connection
  function connect() {
      mongoose.set('debug', true);

      //If no db, one will be created
      const url = 'mongodb://localhost:27017/TeacherClipsx';

      return mongoose.connect(url, 
      { 
          useNewUrlParser: true,    
      })
          .then(() => console.log('Connection to Localhost successful'))
          .catch((err) => console.error("Connection to Localhost UNSUCCESSFUL", err));
  }

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