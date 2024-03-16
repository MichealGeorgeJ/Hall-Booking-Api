import RoomModel from "../models/roomModel.js"
import BookedRoomsModel from "../models/bookedRoomsModel.js"
import CostomerModel from '../models/customerModel.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const createRoom=async(req,res)=>{

    try{
        const room=await RoomModel.create(req.body)
        res.status(200).send({
            message:'Room created successfully',room
        })
    }
    catch(error){
        console.log(error.message)
        res.status(400).send({
            message:error.message
        })
    }
}

const bookRoom=async(req,res)=>{

    try{

        const bookRoom=await BookedRoomsModel.create(req.body)
        if(bookRoom){
            res.status(200).send({
                message:'Room booked successfuly',bookRoom
            })
            const room= await RoomModel.findById(bookRoom.room)
            if(room){
                room.bookedStatus=true
                await room.save()
            }
            const customer=await CostomerModel.findOne({customerName:req.body.customerName})
            if(customer){
                customer.previousRooms.push(bookRoom)
                customer.bookedRoom=bookRoom
                await customer.save()
            }
        }
      
    }
    catch(error){
        console.log(error.message)
    res.status(400).send({
        message:error.message
    })
    }
}

const getAllBookedRooms=async(req,res)=>{
    try{
        const allBookedRooms=await BookedRoomsModel.find()
        res.status(200).send({
            message:'All booked rooms fetched successfully',allBookedRooms
        })
    }catch(error){
        console.log(error.message)
        res.status(400).send({
            message:error.message
        })
    }
}

export default {
    createRoom,
    bookRoom,
    getAllBookedRooms
}
