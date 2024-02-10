import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import Observation from './observationDataModel.js'

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
const submitData = () => {
    const userData = {
      username: username,
      probabilities: probs,
      choices: choices, // Add 100 choices
      outcomes: outcomes // Add 100 outcomes
    };
}


this is form model.js just to look at, should be removed when done
import mongoose from 'mongoose';


const dataSchema = mongoose.Schema({
    surveyTotals: {
        type: [Number], // an array of 3 numbers eg 10, 7, 34
        required: [true, "enter surveyTotals"]
    },
    probabilities: {
        type: [Number], // an array of 3 numbers eg 0.3, 0.5, 0.2
        required: [true, "enter probabilities"]
    },
    choices: {
        type: [Number], // an array of length 100 with entries 1, 2, or 3 denoting which cave the user chose
        required: [true, "enter choices"]
    },
    outcomes: {
        type: [Number], // an array of length 100 with 0s and 1s denoting failure(0) or success(1)
        required: [true, "enter outcomes"]
    }
},
{
    timestamps: false,
    collection: 'Observations'
});

const Observation = mongoose.model('Observation', dataSchema);

export default Observation;

*/

