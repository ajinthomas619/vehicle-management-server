import { app } from "./app.js";
import connectDb from "./config/db.js";


const start = () => {
    connectDb()
     const PORT = process.env.PORT
    app.listen(PORT,() =>{
        console.log(`Server is running on port ${PORT}`)
    })
}
start()