const express=require('express')
const router=express.Router()
const Person=require('../Models/personSchema')

//Create and Save a Record of a Model:


//@Descrption: Post Method _ok
router.post('/users',async(req,res)=>{
    try{const newPerson= new Person(req.body)
        await newPerson.save()
        res.status(200).json({msg:"success",newPerson})
    }catch(err){res.status(500).json({msg:err.message})}
})

//Use model.find() to Search Your Database _ok
//@Descrption: Get Method
router.get('/users',async(req,res)=>{
    try{const newPerson= await Person.find()
        res.status(200).json({msg:"success",newPerson})
    }catch(err){res.status(500).json({msg:err.message})}
})

//Use model.findOne() to Return a Single Matching Document from Your Database _ok
router.get('/users/pizza',async(req,res)=>{
    try{const newPerson= await Person.findOne({"favoriteFoods":"pizza"})
        res.status(200).json({msg:"success",newPerson})
    }catch(err){res.status(500).json({msg:err.message})}
})



//Use model.findById() to Search Your Database By _id _ok
//@Descrption: Get By Id Method
router.get('/users/:id',async(req,res)=>{
    try{const newPerson= await Person.findById(req.params.id)
        if(!newPerson)res.status(404).json({msg:"person not found"})
        res.status(200).json({msg:"success",newPerson})
    }catch(err){res.status(500).json({msg:err.message})}
})

//Perform Classic Updates by Running Find, Edit, then Save _ok
router.put('/users/:id',async(req,res)=>{
    try{const newPerson= await Person.findByIdAndUpdate({_id:req.params.id},{$push:{"favoriteFoods":"hamburger"}})
        if(!newPerson)res.status(404).json({msg:"person not found"})
        res.status(200).json({msg:"updated",newPerson})
        //:{...newPerson._doc}})
            //...newPerson._doc}})
            //._doc,...req.body}})
    }catch(err){res.status(500).json({msg:err.message})}
})

/*//updating one document by req.body
router.put('/users/:id',async(req,res)=>{
    try{const newPerson= await Person.findByIdAndUpdate({_id:req.params.id},{...req.body})
        if(!newPerson)res.status(404).json({msg:"person not found"})
        res.status(200).json({msg:"updated",newPerson:{...newPerson._doc,...req.body}})
    }catch(err){res.status(500).json({msg:err.message})}
})*/


//Perform New Updates on a Document Using model.findOneAndUpdate() _ok
//@Descrption: Update Method
router.put('/age',async(req,res)=>{
    try{const newPerson= await Person.findOneAndUpdate({"name":"laila"},{$set:{"age":20}})
        if(!newPerson)res.status(404).json({msg:"person not found"})
        res.status(200).json({msg:"updated",newPerson})
            //...newPerson._doc}})
            //,...req.body}})
    }catch(err){res.status(500).json({msg:err.message})}
})

//Delete One Document Using model.findByIdAndRemove _ok
//@Descrption: Delete Method
router.delete('/users/:id',async(req,res)=>{
    try{const newPerson= await Person.findByIdAndDelete(req.params.id)
        if(!newPerson)res.status(404).json({msg:"person not found"})
        res.status(200).json({msg:"deleted",newPerson})
    }catch(err){res.status(500).json({msg:err.message})}
})

//MongoDB and Mongoose - Delete Many Documents with model.remove() _ok
router.delete('/Mary/',async(req,res)=>{
    try{const newPerson= await Person.deleteMany({"name":"Mary"})
        if(!newPerson)res.status(404).json({msg:"person not found"})
        res.status(200).json({msg:"deleted",newPerson})
    }catch(err){res.status(500).json({msg:err.message})}
})

//Chain Search Query Helpers to Narrow Search Results
// Find All People Who Love Burritos

router.get('/food/',async(req,res)=>{
    try{
    var foodToSearch="burrito"
person.find({favoriteFoods:foodToSearch})

// Sort Results By Name In Ascending Order
res.sort({name : "asc"}) 
// Pick The First 2 Records
 res.limit(2) 
// Hide The Ages
 res.select("-age") 
// Execute The Query
 res.exec((err, data) => { if(err) done(err); done(null, data); }) }
catch(err){res.status(500).json({msg:err.message})}})
module.exports=router