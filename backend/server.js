import express from "express"
import cors from "cors"

const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());
app.use(cors());


app.get("/", (req,res) => {
    res.send("Hi")
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT} `)
})