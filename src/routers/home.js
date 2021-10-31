import express from 'express';
import controller from '../controllers/home';

const router = express.Router();

router.get('/', controller.home);
router.get('/captcha', controller.generateCaptcha);
router.post('/otp', controller.generateOTP);
router.get('/xml', controller.getXML);
router.get('/face', controller.verifyFace);

export default router;
