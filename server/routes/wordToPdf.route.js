const router = require('express').Router();
const fs = require('fs')
var multer = require('multer');
const path = require('path');
const wordToPdfController = require('../controllers/wordToPdf.controller');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        fs.mkdir('./uploads/',(err)=>{
            cb(null, './uploads/');
         });
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })
/*Get word and return pdf */
router.post('/',upload.single('Document'),wordToPdfController.wordToPdf)

module.exports = router;

