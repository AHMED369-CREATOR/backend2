const mongoose = require ('mongoose')
const userSchema = mongoose.Schema({
    fullName:String,
    email:String,
    age:Number
})
module.exports = mongoose.model('User',userSchema)