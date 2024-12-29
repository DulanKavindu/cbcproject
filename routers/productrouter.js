import express from "express";
import {productsave,productfind,deleteproduct,findproductbyname} from "../contrler/productcontroer.js";


const productrouter = express.Router();
productrouter.get('/',productsave);
productrouter.post('/',productfind);
productrouter.delete('/',deleteproduct);
productrouter.get('/:name',findproductbyname);

export default productrouter;