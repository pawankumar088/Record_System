const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://Pawan088:Pawan%407322@record.vs3schz.mongodb.net/Record_System?retryWrites=true&w=majority"
const mongoURI = "mongodb://localhost:27017"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo