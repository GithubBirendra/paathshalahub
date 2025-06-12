import mongoose from 'mongoose'
async function connect() {
const res = await mongoose.connect('mongodb://localhost:27017/paathshala')
if(res) console.log("Connected to MOngoDB Successfully");
}

export default connect;
