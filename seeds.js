import "./connect.js"
import {Albumapp} from'./albumapp.js';
import albumappSeeds from "./album.json" assert{type: "json"}
import mongoose from "mongoose";
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

