import express from 'express'
import customerController from '../controllers/customerController.js'

const router=express.Router()

router.get('/',customerController.getAllCustomer)
router.get('/:name',customerController.getPreviousBookedRoomsOfCustomer)
router.post('/create',customerController.addCustomer)


export default router
