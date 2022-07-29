import express from "express"; 
import mongoose from "mongoose";
// import router from "./router/router.js";
import router from "./router/router.js";
import cors from 'cors';

const PORT = process.env.PORT ?? 8000; 
const corsOptions ={
   origin:'http://localhost:3000', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200
}
const app = express();
app.use(express.json())
   mongoose.connect("mongodb+srv://Akhmed:123123Laker@cluster0.sh6pm.mongodb.net/testUser?retryWrites=true&w=majority")
         .then(()=>console.log(`Your db connect`))
         .catch(()=>console.log('Error connect your db'))

app.use(cors(corsOptions))
   app.use(router)
   app.listen( PORT , ()=>{
      console.log(`Your server has been started on PORT ${PORT}`);
   })
   
