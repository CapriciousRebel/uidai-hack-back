import { generateCaptcha, generateOTP } from '../services/uidaiAPI';

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
	getXML: (req, res) => res.status(200).json({
		success: 1,
		data: '/xml => `https://stage1.uidai.gov.in/eAadhaarService/api/downloadOfflineEkyc` => (otp, adhar, 4 digit code (store in db))takes in some details and gives the xml(store in the db) generate a QR code of the link to the xml file and return',
	}),

	verifyFace: (req, res) => res.status(200).json({
		success: 1,
		data: '/xml => `/????` => (image of the face, signed xml) => returns a error code (0 = success) ',
	}),

};

export default controller;
