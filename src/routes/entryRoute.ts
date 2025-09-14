import { error } from "console";
import { Router } from "express";
import express from "express";
const FIELD_INTENSITY_SCORE = 'intensityScore'
const FIELD_DESCRIPTION = 'description'
const FIELD_ACTION = 'action'
const FIELD_FEELING = 'feeling'

const ALL_FIELDS = [FIELD_FEELING, FIELD_DESCRIPTION, FIELD_INTENSITY_SCORE, FIELD_ACTION] as const

type AllFields = typeof ALL_FIELDS[number]



const entryRouter = Router();

const isNonEmptyObject = (reqBody: unknown[] | Record<string,unknown>  ) => {

    return Object.prototype.toString.call(reqBody) === '[object Object]' && Object.keys(reqBody).length;
}


entryRouter.use(express.json());      

entryRouter.post('/',(req,res,next)=> {

    const entryContent = req.body;
    console.log(req.body)


    if(!isNonEmptyObject(entryContent)) {
        const err = new Error('No data provided in this request');
        console.log('ive entered into this block')
       
        next(err)
    }

    // if the following fields are null then return them to the server

    type FieldDetails = {
        type: string,
        required: boolean
    }
    const fieldTypeMapper: Record<AllFields, FieldDetails> = {
        feeling: {type: 'string', required: true},
        intensityScore: {type: 'number', required: true},
        description: {type: 'string', required: true},
        action: {type: 'string', required: false}

    }
    const missingFields: string[] =  []
    
    ALL_FIELDS.forEach((field)=> {
    if( !entryContent[field] && fieldTypeMapper[field]['required']) {
        missingFields.push(`${field} not provided`) 
      
    } 

    else if(typeof entryContent[field] !== fieldTypeMapper[field]['type']) {
        missingFields.push( `Invalid field type for ${field} `)
    }

   })

   if(missingFields.length > 0) {
      const validationErrors = missingFields.join('\n')
      console.log(validationErrors)

     throw new Error('invalid fields')
  
   }
   
    const {feeling, intensityScore, description, action} = req.body;





    /// check the type of each 


/// first check that anything has been sent to the backend
/// then check that the required fields have been set 
/// check the  types of each item
/// then send the value to the backend


})

export default entryRouter;