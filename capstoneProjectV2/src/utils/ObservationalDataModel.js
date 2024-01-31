import mongoose from 'mongoose';


const dataSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter username"]
    },
    probabilities: {
        type: [Number], // an array of 3 numbers eg 0.3,0.5, 0.2
        required: [true, "Please enter probabilities"]
    },
    choices: {
        type: [Number], // an array of length 100 with entries 1, 2, or 3 denoting which cave the user chose
        required: [true, "Please enter choices"]
    },
    outcomes: {
        type: [Number], // an array of length 100 with 0s and 1s denoting failure(0) or success(1)
        required: [true, "Please enter outcomes"]
    }
},
{
    timestamps: false,
    collection: 'Observations'
});

const Observation = mongoose.model('Observation', dataSchema);

export default Observation;