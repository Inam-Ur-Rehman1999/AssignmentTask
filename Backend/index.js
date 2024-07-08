const express = require('express')
const mongoose=require('mongoose')
const cors=require('cors')
import { configDotenv } from 'dotenv'
const app = express()
const router = express.Router();
const registerUser=require("./controllers/authController")
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGODB_URL)
router.route('/signup').post(registerUser);

  
  app.listen(process.env.PORT,()=>{
    console.log('Port Connected')
  })