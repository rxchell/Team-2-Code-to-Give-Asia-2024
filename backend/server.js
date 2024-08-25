import express from 'express'
import userRoute from './routes/userRoute.js'
import donationRoute from './routes/donationRoute.js'
import orderRoute from './routes/orderRoute.js'
import authRoute from './routes/authRoute.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

const app = express()
const PORT = 3000

// logging middleware
app.use(morgan('dev'));

// Cookie parser middleware
app.use(cookieParser());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/users', userRoute)
app.use('/api/donations', donationRoute)
app.use('/api/orders', orderRoute)
app.use('/api/auth', authRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})