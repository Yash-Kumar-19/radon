const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();


// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })
router.get('/movies',function(req, res){
    let movies = ['Rang de basanti', 'The shining' , 'Lord of the rings',  'Batman begins']
    res.send(movies)
})

router.get('/movies/:inddexNumber' , function(req,res){
    let movies = ['Rang de basanti', 'The shining' , 'Lord of the rings',  'Batman begins']
    let displayMoive
    if(req.params.inddexNumber < movies.length){
        displayMoive = movies[req.params.inddexNumber]
    }else{
        displayMoive = "use a valid index number"
    }
    
    res.send(displayMoive)
})

router.get('/films', function(req,res){
  const films =  [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
    res.send(films)      
})

router.get('/films/:filmId', function(req,res){
    const films =  [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
    let displayingFilm
    if(req.params.filmId <= films.length && req.params.filmId != 0){
        for(index = 0; index< films.length; index++){
            if(req.params.filmId == films[index].id){
                displayingFilm = films[index].name
                break
            }
        }
    }else{
        displayingFilm = "no film at this index"
    }
    

    res.send(displayingFilm)
})


// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })


module.exports = router;
// adding this comment for no reason