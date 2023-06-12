import express, { Router } from 'express';
import tarotRoute from './tarotRoute.ts';
import userRoute from './userRoute.ts';

const router: Router = express.Router();

router.use('/tarot', tarotRoute);
router.use('/user', userRoute);

export default router;