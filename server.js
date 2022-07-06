import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/auth.routes.js'
import verifyRouter from './routes/verification.routes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)
app.use(verifyRouter)

app.listen( process.env.PORT || 8080, () =>{
    console.log('server is running https://localhost/8080');
} )