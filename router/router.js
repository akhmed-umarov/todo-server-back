import { Router } from "express";
import { addUser , getUser } from "../controllers/user.controllers.js";

const router = Router();

router.post("/newUser" , addUser )
router.get('/' , getUser )


export default router