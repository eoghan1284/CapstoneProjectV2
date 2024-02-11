import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import Observation from './src/utils/ObservationalDataModel.js'

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://eoghan1284:Complexity7132K14@cluster0.738tjud.mongodb.net/CapstoneDB?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log("App is running on port 5000")
    });
}).catch(error => {
    console.log(error);
});

app.post('/observation',async(req,res) => {
    try {
        const observation = await Observation.create(req.body)
        res.status(200).json(observation)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

/*
this is from model.js just to look at, should be removed when done
import mongoose from 'mongoose';


const dataSchema = mongoose.Schema({
    survey1Total: {
        type: Number, 
        required: [true, "enter survey 1 total"]
    },
    survey2Total: {
        type: Number, 
        required: [true, "enter survey 2 total"]
    },
    survey3Total: {
        type: Number, 
        required: [true, "enter survey 3 total"]
    },
    probabilities: {
        type: [Number], // an array of 3 numbers eg 0.3, 0.5, 0.2
        required: [true, "enter probabilities"]
    },
    finalGold: {
        type: Number, //playerGold at end
        required: [true, "enter finalGold"]
    }
}
*/
