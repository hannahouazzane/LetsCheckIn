import { Router } from "express";
import express from "express";
const FIELD_INTENSITY_SCORE = 'intensityScore'
const FIELD_DESCRIPTION = 'description'
const FIELD_ACTION = 'action'
const FIELD_FEELING = 'feeling'

const entryRouter = Router();

entryRouter.use(express.json());      

entryRouter.post('/',(req,res,next)=> {

    const entryContent = req.body;
    console.log(req.body)


    if(!entryContent) {
        const err = new Error('No data provided in this request');
        ///TO DO - CREATE A CUSTOM COMPONENT FOR THIS
        next(err)
    }


    // const {feeling, intensityScore, description, action} = req.body;


    /// check the type of each 


/// first check that anything has been sent to the backend
/// then check that the required fields have been set 
/// check the  types of each item
/// then send the value to the backend


})

export default entryRouter;