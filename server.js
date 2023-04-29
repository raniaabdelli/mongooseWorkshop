//Installing and setting up Mongoose:
const express= require('express')
const app=express()
const PORT=5000
const mongoose=require('mongoose')
app.use(express.json())
mongoose.connect("mongodb+srv://rania:z12Ou18qjszzo1hu@rania.h7luwne.mongodb.net/mongooseWorkshop?retryWrites=true&w=majority")
.then(()=>console.log("database connected"))
.catch((err)=>{if (err)throw err})
app.use('/api',require('./routes/personRoutes'))
app.listen(PORT,()=>console.log("listening on port",PORT))
