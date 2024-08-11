import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import path from "path"

import userRoute from './routes/user.route.js'
import messageRoute from "./routes/message.route.js"
import { app,server } from "./SocketIO/server.js"


dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use(cors());


const PORT = process.env.PORT || 5000
const URL = process.env.MONGODB_URL

try {
  mongoose.connect(URL)
  console.log("connected to mongodb")
  
} catch (error) {
  console.log(error.message)
}

app.use("/api/user", userRoute)
app.use("/api/message", messageRoute)



//Deployment setup

if(process.env.NODE_ENV === "production"){
  const dirPath = path.resolve()

  app.use(express.static("./frontend/build"))
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirPath,"./frontend/build","index.html"))
  })
}

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})





