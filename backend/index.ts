import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './src/database'
import { routerUsers, routerWorkouts } from './src/routes'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(routerWorkouts)
app.use(routerUsers)

connectDB().then(res => {
    if(res instanceof Error){
        app.listen(process.env.PORT || 3001, () => console.log('rodado sem banco ' + res.message))
        return 
    }
    app.listen(process.env.PORT || 3001, () => console.log(res))

})
