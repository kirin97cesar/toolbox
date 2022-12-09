import express from 'express'
import fileRouter from './fileRouter.js'
const api = express.Router()

api.use('/files', fileRouter)

export default api
