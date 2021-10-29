import express from 'express';
import controller from '../controllers/home';

const router = express.Router();

router.get('/', controller.home);

export default router;
