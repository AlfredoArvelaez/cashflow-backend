import express, { Application } from 'express'
import { attachUserIdMiddleware } from './middlewares/attachUserId'
import API_ROUTES from './routes'
const app: Application = express()

app.use(express.json())

app.use(attachUserIdMiddleware)
// ROUTES
app.use('/api/v1', API_ROUTES)

export default app
