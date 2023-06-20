import mongoose from 'mongoose';
import { config } from 'dotenv';
import { TarotCard } from '../api/models/Tarotcard';
import { seedCards } from './cards/seedCards';


export const connectDB = async () => {
    config();
    const connectionString = process.env.DB_CONNECTION_STRING;

    if (!connectionString) {
        console.error('No connection string provided');
        process.exit(1);
    }

    try {
        await mongoose.connect((connectionString as string));
        console.log('MongoDB connected...');
        await seedCards();
    } catch (err) {
        if (err instanceof Error) {
            // We know that err is an Error object, so it's safe to access err.message
            console.error(err.message);
        }
        process.exit(1);
    }
};

