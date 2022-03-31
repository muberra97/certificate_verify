const router = require('express').Router()
const users = require("../data/participant.js");

module.exports = app => {

    const router = require('express').Router()


    router.get('/', (req, res, next) => {
        res.render('index.ejs')
    })
    
    router.get('/:id', (req, res) => {
        const id = req.params.id
        const user = users.find(user => user.id === id)
        if(user){
            res.render('certificate_info.ejs',{'user' : user} );
        }
        else{
            res.status(404).send("Bu ID'ye ait katılımcı bulunamadı")
        }
        
    })

    app.use('/participant', router)
}