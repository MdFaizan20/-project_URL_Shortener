const {connect,set} = require("mongoose")
const express = require("express")
const route = require("./route/routes")
const app = express()
app.use(express.json())
set('strictQuery', false)
connect("mongodb+srv://Mdfaizan:Faizan121@cluster0.vaxmuig.mongodb.net/urlShortner",
{ useNewUrlParser: true })
.then(() => console.log("MongoDB is connected"))
.catch(err => console.log(err))

app.use("/", route)
app.listen(3000, function(){
console.log("Express port is running on "+3000)}) 