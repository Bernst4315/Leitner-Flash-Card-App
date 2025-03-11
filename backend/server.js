import express from "express"
import cors from "cors"

import router from "./routes/cards.js";

const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.get("/", (req,res) => {
    res.send("Hi")
})

app.use("/api/cards", router)

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT} `)
})