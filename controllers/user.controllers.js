import modelUser from "../model/modelUser.js"


export const addUser = async (req, res)=>{ 
   try{ 
      const doc = new modelUser({ 
         fullName: req.body.fullName , 
         age: req.body.age
      })
      const user = await doc.save(); 
      res.status(200).json({ 
         ...user
      })
   }
   catch (err){ 
      console.log(err);
      res.status(500).json({ 
         message: 'Somebody wrong...'
      })
   }
}


export const getUser = async (req, res)=>{ 
   res.setHeader("Access-Control-Allow-Origin", "*")
   res.setHeader("Access-Control-Allow-Credentials", "true");
   res.setHeader("Access-Control-Max-Age", "1800");
   res.setHeader("Access-Control-Allow-Headers", "content-type");
   res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
   try{ 
   const users = await modelUser.find();
   if (users.length === 0 ){ 
      return res.status(404).json({
         message: 'Not found'
      });
   }
   res.json({ 
      "array": users
   })} catch (err) { 
      res.status(500).json({ 
         message: err
      })
   } 
}