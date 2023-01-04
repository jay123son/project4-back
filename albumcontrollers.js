import {Albumapp} from "./albumapp.js"
function show(req,res) {
    Albumapp.find({})
    .then(albums => res.json(albums))
    .catch(err=> {
        console.log(err)
        res.status(500).json(err)
    })}
function details(req, res) {
    Albumapp.findById(req.params.id)
    .then(album => res.json(album))
    .catch(err=> {
        console.log(err)
        res.status(500).json(err)
    })}
    function add(req, res) {
        Albumapp.create(req.body)
      .then(album=> res.status(201).json({album}))
        .catch(err=> {
            console.log(err)
            res.status(500).json(err)
            })}

export{show, details, add}