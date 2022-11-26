import mongoose from "mongoose";
const host=process.env.HOST || "localhost";
const port= process.env.PORT || 27017;
const database=process.env.DATABASE || "users";

mongoose.connect(`mongodb://${host}:${port}/${database}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open',() => {
    console.log('Connected to MongoDB');
})