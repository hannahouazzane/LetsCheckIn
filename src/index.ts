import express from "express";
import {connection} from './config.js'
import entryRouter from "./routes/entryRoute.js"; 

const app = express();
const port = "3001";
app.use(express.json())
app.use('/entry', entryRouter)
app.get('/', (req, res)=>{

    res.status(200).json({test: 'this is a test'})
})

connection.connect((err)=> {
    if(err) {
        
        console.log(err);
        throw err;
    }
});


app.listen(port, ()=> {
    console.log(`you are running on port ${port}`)
})
