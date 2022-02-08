import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

export const initializeApp = (port: number) => {
  app.listen(port, () => {
    console.log(`App listening at port ${port}`)
  })
}
