const config = require('./config.js')

module.exports={
    authenticate: (req, res, next)=>{
        let rb = req.body
        //req.body
        if(rb.username === config.username && rb.password === config.password) {
            next()
        } else{
            res.status(403).send('wrong password or username')
        }
    }
}