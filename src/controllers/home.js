import { fetchEKyc, generateCaptcha, generateOTP } from '../services/uidaiAPI';
import { saveXML, sendXML } from '../models/xml';

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
		const xmlData = await fetchEKyc(
			req.body.txnNumber,
			req.body.otp,
			req.body.aadhar,
		);
		const xmlId = await saveXML(xmlData);
		return res.status(200).json({ xmlId, pwd: xmlData.pwd });
	},

	sendXML: async (req, res) => {
		const response = await sendXML(req.body.xmlId, req.body.pwd);
		return res.status(200).json({ response });
	},
};

export default controller;
