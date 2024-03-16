import express from 'express'
import homePage from '../controllers/homePageController.js'
import customerRoutes from './customerRouter.js'
import roomsRoutes from './roomsRouter.js'



const router=express.Router()

router.get('/',homePage.homePage)
router.use('/customers',customerRoutes)
router.use('/rooms',roomsRoutes)

export default router