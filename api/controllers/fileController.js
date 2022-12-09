import { getAllSecretFiles, getSecretFileByName } from '../services/externalAPI.js'
import { getdetailFiles } from '../services/internalAPI.js'

export const getAllfiles = async (req, res, next) => {
  try {
    const data = await getAllSecretFiles()
    res.send(data)
  } catch (error) {
    next(JSON.stringify(error))
  }
}

export const getFileByName = async (req, res, next) => {
  try {
    const { fileName: nameFile } = req.query
    const detailFiles = await getdetailFiles({ files: [nameFile] })
    if(!detailFiles.length) return res.status(404).send({message: 'Not found file'})
    res.send(detailFiles)
  } catch (error) {
    next(JSON.stringify(error))
  }
}

export const getAllFilesConvert = async (req, res, next) => {
  try {
    const getAllfiles = await getAllSecretFiles()
    const detailFiles = await getdetailFiles({ files: getAllfiles.files })
    res.send(detailFiles)
  } catch (error) {
    next(JSON.stringify(error))
  }
}
