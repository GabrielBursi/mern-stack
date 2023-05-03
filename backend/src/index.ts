import express from 'express'
import dotenv from 'dotenv'
import { router } from './routes/index.js'
import { connectDB } from './database/index.js'

const app = express()
dotenv.config()
app.use(express.json())
app.use(router)

connectDB().then(res => {
    if(res instanceof Error){
        app.listen(process.env.PORT || 3000, () => console.log('rodado sem banco ' + res.message))
        return 
    }
    app.listen(process.env.PORT || 3000, () => console.log(res))

})
