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
},
{
    timestamps: false,
    collection: 'Observations'
});

const Observation = mongoose.model('Observation', dataSchema);

export default Observation;
