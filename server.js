import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/auth.routes.js'


dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)


app.listen( process.env.PORT || 8080, () =>{
    console.log('server is running https://localhost/8080');
} )