const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const bodyParser = require('body-parser');
const supporter = require('../../models/supporter');
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;


        

router.get('/test', 
(req, res) => res.json({
    msg: 'Supporter works'
}));



router.post('/register',(req, res)=>{
    // See if there is an already existing record with the email address
    Supporter.findOne({fullName: req.body.fullName})
    .then(suppo =>{
        if(suppo){
           return res.status(400).json({fullName: 'Supporter already exists'});  // bad request because the user already exists
        }
        else{

                const newSupporter = new Supporter({
                    _id: req.body._id,
                    fullName: req.body.fullName,
                    salutation: req.body.salutation,
                    lookupId: req.body.lookupId,
                    isDonor: req.body.isDonor,
                    isSponsor: req.body.isSponsor,
                    designationId: req.body.designationId,
                    addedById: req.body.addedById,
                    changedById: req.body.changedById
                })
                    newSupporter.save()
                        .then(suppo => res.json(suppo))
                        .catch(err => console.log(err));
            }
        })
    });
router.post('/add', (req, res, next) => {
    MongoClient.connect('mongodb://abeldebela:Abelabel1@ds038379.mlab.com:38379/react_cnt_mgmt',(err, db) => {
        var dbase = db.db("react_cnt_mgmt");
        if(err) return console.log(err)

        var supporter = {
            _id: req.body._id,
            fullName: req.body.fullName,
            salutation: req.body.salutation,
            lookupId: req.body.lookupId,
            isDonor: req.body.isDonor,
            isSponsor: req.body.isSponsor,
            designationId: req.body.designationId,
            addedById: req.body.addedById,
            changedById: req.body.changedById
          };
      
          dbase.collection("supporter").save(supporter, (err, result) => {
            if(err) {
              console.log(err);
            }
      
            res.send('Supporter added successfully');
          });
        
    })
    
   
  });


module.exports = router;