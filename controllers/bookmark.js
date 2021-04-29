const express = require('express')
const router = express.Router()
const { sequelize, models } = require('../models')
const Bookmark = require('../models').Bookmark

router.get('/', async function (req, res) {
    const bookmarks = await Bookmark.findAll() 
    res.render('bookmarks/index', { bookmarks: bookmarks})
})

router.post('/', (req, res) => {
    console.log('Request body')
    console.log(req.body)

//     sequelize.sync().then(async()=>{
//         console.log(req.body)
//         if(req.body.urlToDelete){
//             await Bookmark.destroy({
//                 where:{url: req.body.urlToDelete}
//             })
//         }
//         else if(req.body.newUrl){
//             console.log(req.body)
//             await Bookmark.create({url: req.body.newUrl})
//         }
//         res.redirect('/')
//     })
})

module.exports = router