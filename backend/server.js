import express from 'express'
import userRoute from './routes/userRoute.js'
import donationRoute from './routes/donationRoute.js'
import orderRoute from './routes/orderRoute.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

const app = express()
const PORT = 3000

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/users', userRoute)
app.use('/api/donations', donationRoute)
app.use('/api/orders', orderRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})