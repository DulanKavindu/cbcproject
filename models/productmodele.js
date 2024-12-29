import mongoose from "mongoose";

const pdrouctscheema = mongoose.Schema(
    {
        name : String,
        price : Number,
        brnad : String,

    }
)
const product = mongoose.model("products",pdrouctscheema);

export default product;