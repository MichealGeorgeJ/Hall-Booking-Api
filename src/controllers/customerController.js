import CustomerModel from "../models/customerModel.js";
import mongoose from 'mongoose'

const getAllCustomer=async(req,res)=>{
    try{
        const allCustomers=await CustomerModel.find().select('customerName bookedRoom').populate({
            path: 'bookedRoom',
            populate: {
                path: 'room',
                model: 'rooms'
            }
        }).exec()
        
        res.status(200).send({
            message:'All customers fetched successfully',allCustomers
        })
    }catch(error){
console.log(error.message)
res.status(400).send({
    message:error.message
})
    }
}

const getPreviousBookedRoomsOfCustomer = async (req, res) => {
    const { name } = req.params;
  
    try {
        const previousBookedRooms = await CustomerModel.findOne({ customerName: name })
            .select('customerName previousRooms')
            .populate({
                path: 'previousRooms',
                populate: {
                    path: 'room',
                    model: 'rooms'
                }
            })
            .exec();

        res.status(200).send({
            message: 'Previous booked rooms fetched successfully',
            previousBookedRooms
        });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ error: 'Internal Server Error' });
    }
};

const addCustomer=async(req,res)=>{
    try{
        const customer=await CustomerModel.create(req.body)
        res.status(200).send({
            message:'customer added successfully',customer
        })
    }
    catch(error){
        console.log(error.message)
        res.status(400).send({
            message:error.message
        })
    }
}

export default {
    getAllCustomer,
    getPreviousBookedRoomsOfCustomer,
    addCustomer
}