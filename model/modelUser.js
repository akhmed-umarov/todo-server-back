import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ 
   fullName: { 
      type: String, 
      required: true
   }, 
   age: { 
      type: Number, 
      required: true
   }
})

export default mongoose.model('UserTest' , userSchema);