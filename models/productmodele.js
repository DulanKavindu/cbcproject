import mongoose from "mongoose";

const pdrouctscheema = mongoose.Schema(
    {
        name : String,
        price : Number,
        brnad : String,
        lastprice :string,

    }
)
const product = mongoose.model("products",pdrouctscheema);

export default product;