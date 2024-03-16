import mongoose from './database.js'

const bookedRoomsSchema=new mongoose.Schema({
    customerName:{
        type:String,
        required:[true,'Name of the Customer is required']
    },
    date:{
type:Date,
required:[true,'Booked date is required']
    },
    startTime:{
        type:Date,
        required:[true,'Starting time is required']
    },
    endTime:{
        type:Date,
        required:[true,'Endtime is required']
    },
    room:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'rooms'
    }
},{
    collection:'bookedRooms',
    versionKey:false
})

const BookedRoomsModel=mongoose.model('bookedRooms',bookedRoomsSchema)

export default BookedRoomsModel