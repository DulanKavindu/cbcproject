import express from "express";
import { createoder } from "../contrler/odercontroler.js";

const oderrouter= express.Router();
oderrouter.get("/", createoder);

export default oderrouter;