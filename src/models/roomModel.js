import mongoose from './database.js'

const roomSchema=new mongoose.Schema({
    noOfSeats:{
        type:Number,
        required:[true,'No of seats required']
    },
    amenties:[
        {
            type:String,
            required:[true,'Amenties in a room required']
        }
    ],
    price:{
        type:Number,
        required:[true,'Price of the room is required']
    },
    bookedStatus:{
        type:Boolean,
        default:false
    }
}
,{
    collection:'rooms',
    versionKey:false
})

const RoomModel=mongoose.model('rooms',roomSchema)

export default RoomModel