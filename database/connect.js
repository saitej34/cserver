const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})
const ur = process.env.urlss
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}


mongoose.connect('mongodb+srv://root:1og9LkTHOSmn3zeT@cluster0.ligpuzz.mongodb.net/?retryWrites=true&w=majority',options).then((res)=>{
    console.log("Connected Successfully")
}).catch((err)=>{
    console.log(err)
})