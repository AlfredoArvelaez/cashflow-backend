import express, { Application } from 'express'
import { errorHandler, errorLogger } from 'middlewares'
import API_ROUTES from 'routes'
const app: Application = express()

app.use(express.json())

// ROUTES
app.use('/api/v1', API_ROUTES)

// Error handling
app.use(errorHandler)
app.use(errorLogger)

export default app
