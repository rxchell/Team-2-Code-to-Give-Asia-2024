import express  from 'express'
import userRoute from './routes/userRoute.js'
import donationRoute from './routes/donationRoute.js'
import orderRoute from './routes/orderRoute.js'

const app = express()
const PORT = 3000

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api/users', userRoute)
app.use('/api/donations', donationRoute)
app.use('/api/orders', orderRoute)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})