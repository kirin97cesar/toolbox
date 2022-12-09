import express from 'express'
import { getAllfiles, getFileByName, getAllFilesConvert } from '../controllers/fileController.js'
const router = express.Router()

router.get('/list', getAllfiles)
router.get('/:data', getFileByName)
router.get('/', getAllFilesConvert)

export default router
