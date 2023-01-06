import {Albumapp} from'./albumapp.js';
import albumappSeeds from "./album.json" assert{type: "json"}
import mongoose from "mongoose";
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

const seedinData = async () => {
    try {

        let allData = albumappSeeds;
        await Albumapp.deleteMany({})
        await Albumapp.insertMany(allData)
        
    } catch(err) {
        console.log(err);
    }
}
seedinData() .then(() => {
    mongoose.connection.close()})

