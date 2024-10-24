import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';
import { registerUser } from './controllers/userController.js';


// App config
const port = process.env.PORT || 4000;
const app = express();
await connectDB();

// Initialize middlewares
app.use(express.json());
app.use(cors());

// API end points
app.use('/api/user', registerUser);

// API route
app.get('/', (req, res) => {
    res.send("API Working")
});

app.listen(port, ()=> console.log("Server running on port :"+port));