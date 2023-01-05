import mongoose from 'mongoose';
// const mongoose = require('./appup');
const Schema = mongoose.Schema;

const albumappSchema = new Schema(
    {
        cover: String,
        album: String,
        artists: String,
        released: String,
       tracks: [String],
       about: String
    }
);

const Albumapp = mongoose.model('Albumapp', albumappSchema);
export {Albumapp}  