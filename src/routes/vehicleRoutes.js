import express from 'express'
import { addVehicle,updateVehicle,deleteVehicle,searchVehicle,getAllVehicles,getVehicleById } from '../controllers/vehicleController.js'
import { upload } from '../multer/multer.js'



const vehicleRouter = express.Router()

vehicleRouter.get('/get-vehicle',getAllVehicles)
vehicleRouter.post('/add-vehicle',upload.single('file'),addVehicle)
vehicleRouter.put('/update-vehicle',upload.single('file'),updateVehicle)
vehicleRouter.delete('/delete-vehicle',deleteVehicle)
vehicleRouter.get('/search-vehicle/:regex',searchVehicle)
vehicleRouter.get('/get-vehicle/:id',getVehicleById)

export {vehicleRouter}

