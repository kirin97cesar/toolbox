import dotenv from 'dotenv'
dotenv.config()

const config = {
  apiExternal: {
    urlBase: process.env.URL_API_EXTERNAL || 'https://echo-serv.tbxnet.com',
    authorization: process.env.AUTHORIZATION_API_EXTERNAL || 'Bearer aSuperSecretKey'
  },
  describeApi: {
    port: process.env.PORT || '4000',
    name: 'API TOOLBOX TEST'
  }
}

export default config
