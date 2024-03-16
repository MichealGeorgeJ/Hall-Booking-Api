import express from 'express'
import roomsController from '../controllers/roomsController.js'

const router=express.Router()

router.get('/allbookedrooms',roomsController.getAllBookedRooms)
router.post('/create',roomsController.createRoom)
router.post('/bookRoom',roomsController.bookRoom)

export default router