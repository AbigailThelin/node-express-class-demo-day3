const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      middleware = require('./middleware.js'),
      config = require('./config.js')
      session = require('express-session'),
      app = express(),
      port = 3000;

//===========TOP LEVEL MIDLEWARE============//

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: config.secret,
    saveUninitialized: false,
    resave: false
}));


// ======== ENDPOINTS ===========//

app.post('/api/login', middleware.authenticate, (req, res)=>{
    req.session.user = req.body.username;
    res.status(200).send('you are good to go')
})

app.get('/api/user', (req, res)=>{
    let user = req.sersssion.user ? req.session.user : ''
    res.status(200).send({ user })
})




app.listen(port, ()=> console.log(`listening on port ${port}`))