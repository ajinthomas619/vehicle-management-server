import express from 'express'
import { createUser,findUser } from '../controllers/authController.js'

const authRouter = express.Router()



authRouter.post('/signup',createUser)
authRouter.post('/login',findUser)


export {authRouter}