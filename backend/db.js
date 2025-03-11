import mongoose from "mongoose";
import "dotenv/config"

const PORT = 3000;

export default async function connectDB(app){
    await mongoose.connect(process.env.MONGO_URL)
    .then(() => {

        app.listen(PORT, ()=>{
            console.log(`listening on port ${PORT} and connected to DB `)
        })

    })
    .catch((error) => {
        console.log(error)
    })


} 