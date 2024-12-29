import express from 'express';
import {savestudent,studentfind} from '../contrler/studentcontroer.js';

const studentrouter1 = express.Router();

studentrouter1.get('/',savestudent);
studentrouter1.post('/',studentfind);
   

export default studentrouter1;