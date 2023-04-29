//Create a person with this prototype:
const mongoose=require('mongoose')
const personSchema=mongoose.Schema(
    {
        name:{type:String,required:true},
        age:Number,
        favoriteFoods: Array

        }
)
const Person=mongoose.model('Person',personSchema)
module.exports=Person