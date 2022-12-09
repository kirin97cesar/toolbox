import axios from 'axios'
import config from '../config/index.js'
import ValidationError from '../utils/error.js'

export const getAllSecretFiles = async () => {
  const urlRequest = `${config.apiExternal.urlBase}/v1/secret/files`
  try {
    const response = await axios({
      method: 'get',
      url: urlRequest,
      headers: {
        authorization: config.apiExternal.authorization
      }
    })
    return response.data
  } catch (error) {
    throw new ValidationError(`ERROR API EXTERNAL - ${urlRequest}`, error)
  }
}

export const getSecretFileByName = async ({ nameFile = '', skipError = false }) => {
  const urlRequest = `${config.apiExternal.urlBase}/v1/secret/file/${nameFile}`
  try {
    const response = await axios({
      method: 'get',
      url: urlRequest,
      headers: {
        authorization: config.apiExternal.authorization
      }
    })
    return response.data
  } catch (error) {
    if (skipError) return null
    throw new ValidationError(`ERROR API EXTERNAL - ${urlRequest}`, error)
  }
}
