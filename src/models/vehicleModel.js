import mongoose from 'mongoose'


const vehicleSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    manufacture:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
       
    }
})

const Vehicle = mongoose.model("vehicle",vehicleSchema)

export {Vehicle}