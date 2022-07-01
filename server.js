import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const a = 15
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))





app.listen( process.env.PORT || 8080, () =>{
    console.log('server is running https://localhost/8080');
} )