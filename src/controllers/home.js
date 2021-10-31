import { fetchEKyc, generateCaptcha, generateOTP } from '../services/uidaiAPI';

const controller = {
	home: (req, res) => res.status(200).json({
		success: 1,
		data: 'Welcome To /',
	}),
	generateCaptcha: async (req, res) => {
		const captcha = await generateCaptcha();
		return res.status(200).json({ captcha });
	},
	generateOTP: async (req, res) => {
		const response = await generateOTP(
			req.body.aadhar,
			req.body.captchaTxnId,
			req.body.captchaValue,
		);
		return res.status(200).json({ response });
	},
	fetchEKyc: async (req, res) => {
		const response = await fetchEKyc(
			req.body.txnNumber,
			req.body.otp,
			req.body.aadhar,
		);
		return res.status(200).json({ response });
	},
};

export default controller;
