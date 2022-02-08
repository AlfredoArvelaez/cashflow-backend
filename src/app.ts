import express, { Application } from 'express'
import { connectToDatabase } from './database'
import API_ROUTES from './routes'

const app: Application = express()
connectToDatabase()

app.use(express.json())
// ROUTES
app.use('/api/v1', API_ROUTES)

export default app
