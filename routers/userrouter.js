import express from 'express';
import {saveuser,finduser,loginuser} from '../contrler/useconrol.js';

const userrouter = express.Router();

userrouter.get("/",finduser);
userrouter.post("/",saveuser);
userrouter.post("/login",loginuser);



export default userrouter;
