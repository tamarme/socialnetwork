import express from 'express';
import authController from './auth.controller';

const router = express.Router();

router.post('/login', authController.login.bind(authController));

export default router;
