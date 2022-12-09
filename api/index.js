import express from 'express'
import config from './config/index.js'
import helmet from 'helmet'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

import api from './routes/index.js'
import invalidError from './utils/invalidError.js'

const app = express()
const swaggerDocument = YAML.load('./swagger.yaml');

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use('/api', api)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(invalidError)

app.listen(config.describeApi.port, () => {
  console.log(`Running ${config.describeApi.name} on Port ${config.describeApi.port}`)
})

export default app;