import { convertCSVtoJSON, restructureFormatData } from '../utils/convertCSVtoJSON.js'
import { getSecretFileByName } from './externalAPI.js'

export const getdetailFiles = async ({ files }) => {
  const detailFiles = []
  await Promise.all(files.map(async nameFile => {
    const detailFile = await getSecretFileByName({ nameFile, skipError: true })
    const infoDetailConvert = convertCSVtoJSON(detailFile)
    const lines = restructureFormatData(infoDetailConvert)
    if (detailFile && lines.length > 0) detailFiles.push({ file: nameFile, lines })
  }))
  return detailFiles
}
