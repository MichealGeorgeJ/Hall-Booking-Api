import mongoose from './database.js'

const customersSchema=new mongoose.Schema({
    customerName:{
        type:String,
        required:[true,'Customer Name is required']
    },
    bookedRoom:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'bookedRooms'
    },

    previousRooms:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'bookedRooms',
            
        }
    ]

},{
    collection:'customers',
    versionKey:false
})


const CustomersModel=mongoose.model('customers',customersSchema)

export default CustomersModel

