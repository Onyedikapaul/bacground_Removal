import express from 'express';
import { registerUser, loginUser, userCredits, getProfile } from '../controllers/userController.js';
import authUser from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/signup', registerUser);
userRouter.post('/login', loginUser);

// route for user credit balance
userRouter.get('/credits', authUser, userCredits);

userRouter.get('/user-profile', authUser, getProfile)

export default userRouter;