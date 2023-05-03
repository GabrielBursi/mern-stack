import mongoose from "mongoose";

export async function connectDB(){
    try {
        await mongoose.connect(process.env.DB_URL || 'erro')
        return 'Banco Conectado!!'
    } catch (error) {
        return new Error('Erro ao se conectar com o banco ' + error)
    }
}