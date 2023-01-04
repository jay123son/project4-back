import express from 'express';
import cors from 'cors';
import data from "./album.json" assert{type: "json"}
import {Albumapp} from "./albumapp.js"
import {router as albumrouter} from './appup.js';
import "./connect.js"
const router = express.Router();
const app = express();
app.set('port', process.env.PORT || 8000);
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/album', albumrouter);
// router.get('/album', async (req, res) => {
//     try {
//         console.log("im trying to get albums")
//       res.status(200).json(await Albumapp.find({}))
      
//     } catch (err) {
//         console.log('i was not able to get albums')
//           next(err);
//     }

// });


app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

app.get("/", (req, res) => {
    //res.json let's us send a response as JSON data
    res.redirect('/album' )
})

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

export default  {app};