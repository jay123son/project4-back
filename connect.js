import mongoose from 'mongoose';
import "dotenv/config.js" ;

const mongoURI = process.env.DATABASE_URL
  process.env.NODE_ENV === `production`
  ? process.env.DATABASE_URL
  :`mongodb://localhost/albumapp`;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

  }, err => {
    if(err) throw err;
    console.log(`Connected to Mongo baby!!!! ${mongoURI}`)
  })
