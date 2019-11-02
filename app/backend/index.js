var express = require('express');
const fs = require("fs");
var mongoclient = require('mongodb').MongoClient;

var db;

mongoclient.connect('mongodb://localhost:27017',function(err, client){
    if(err){
        throw err
    } 
    db = client.db('ATTAINUTEST');
});

var app = express();

app.use(express.static('public'));

app.get('/' , function(res,req){
    res.sendfile('index.html')
})

app.get('/retrievedata', function(res,req){
    fs.readFile('airports.json', 'utf-8', (err,data) => {
        if(err) {return err};

        data = JSON.parse(data);

        console.log(data.airports.length)
        var x = data.airports.length;
        
        console.log(x)

        for (var i = 0 ; i < x ; i ++){
            db.collection('airports').insert(data.airports[i], function(err,result){
                if(err){
                    throw err;
                }
            })
            db.collection('cities').insert( {city : data.airports[i].city_name , key : i+1 },  function(err,result){
                if(err){
                    throw err;
                }
            })
        }
    }) 
    
})


app.get('/cities',function(req,res){
        db.collection('cities').find().toArray(function(err,result){
        res.json(result)
        })
})

app.get('/airports/:city',function(req,res){
    db.collection('airports').findOne({city_name : req.params.city} ,function(err,result){
    res.json(result)
    // console.log(result)
    })
})


app.listen(8000)
