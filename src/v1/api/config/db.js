import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const databaseConnection = () => {
    try {
        return mongoose
            .connect(process.env.MONGO_URL)
            .then(() => {
                console.log('Connected To The Database.');
            })
            .catch((err) => console.log('Unable To Connect...!:- ', err));
    } catch (error) {
        return console.log('Error occurs in the server', error);
    }
};

export default databaseConnection;