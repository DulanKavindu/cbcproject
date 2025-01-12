import express from "express";
import {saveproduct,getproduct} from "../contrler/productcontroer.js"

const productrouter = express.Router();
productrouter.get("/",saveproduct);
productrouter.post("/",getproduct);



export default productrouter;