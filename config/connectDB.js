const mongosse= require ('mongoose')
const connectDB=async()=>{
    try {
        await mongosse.connect(process.env.db)
        console.log('database connected...')
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDB