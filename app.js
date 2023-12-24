const data = require('./models/dvoire.js');
const express = require('express')
require('./config/connect_db');

const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.use(express.static('public'))


// get data in db 
app.get('/', (req, res) => {
    res.render('ajout_dv', { })
});



app.get('/repense.ejs', (req, res) => {
    data.find()
    .then((result) => {
        res.render('repense.ejs', {arr:result} )

        console.log(result);

    })
    .catch((err) => {
        console.log(err);
    })
   
});









app.listen(port, () => {
    console.log(`http://localhost:${port}`);

})


//fin git data in db

//post data in db 
const Dvoire = require("./models/dvoire.js");

app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
    const dvoire = new Dvoire(req.body);

    dvoire
        .save()
        .then(result => {
            res.redirect("/",);

        

        })
        .catch(err => {
            console.log(err);
        });
});
//fin post data in db 



app.use(express.static('public'))
