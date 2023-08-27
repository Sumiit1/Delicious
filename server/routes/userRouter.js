const express = require('express')

const router = express.Router()

const User = require('../models/userModel')
const { useParams } = require('react-router-dom')

router.get('/user/:uid', async (req,res)=>{
    const {uid}=req.params
    const user=await User.findOne({id:uid})
    res.send(user)
})
router.post('/create-user', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        id: req.body._id,
        admin:false
    })

    user.save((err, user) => {
        if (err) {
            
            res.status(400).send({ error : err})
        } else {
            
            res.status(200).send({ data: user})
        }
    })
})


module.exports = router