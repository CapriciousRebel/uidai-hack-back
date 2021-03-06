import axios from 'axios';
import { uuid } from 'uuidv4';

/**
 * Generate a Captcha using the Uidai API
 * @returns Data containing the base64 encoded captcha
 */
export const generateCaptcha = async () => {
	const url = process.env.generateCaptchaURL;
	const data = {
		langCode: 'en',
		captchaLength: '3',
		captchaType: '2',
	};
	const headers = {
		'Content-Type': 'application/json',
	};
	const response = await axios.post(url, data, { headers });
	return response.data;
};

/**
 *  a Captcha using the Uidai API
 * @returns Data containing the base64 encoded captcha
 */
export const generateOTP = async (aadhar, captchaTxnId, captchaValue) => {
	const url = process.env.generateOTPURL;
	const headers = {
		'Content-Type': 'application/json',
		'Accept-Language': 'en_in',
		'x-request-id': uuid(),
		appid: 'MYAADHAAR',
	};
	const data = {
		uidNumber: aadhar,
		captchaTxnId,
		captchaValue,
		transactionId: `MYAADHAAR:${uuid()}`,
	};
	const response = await axios.post(url, data, { headers });
	return response.data;
};

/**
 * fetch the xml and password for the generated xml file
 * @returns the xml(base64 encoded string) and password for the generated xml file
 */
export const fetchEKyc = async (txnNumber, otp, aadhar) => {
	const url = process.env.fetchEKycURL;
	const headers = {
		'Content-Type': 'application/json',
	};
	const shareCode = Math.floor(1000 + Math.random() * 9000).toString();
	const data = {
		uid: aadhar,
		otp,
		shareCode,
		txnNumber,
	};
	const response = await axios.post(url, data, { headers });
	if (response.data.status === 'Success') {
		const xmlData = {
			xml: response.data.eKycXML,
			pwd: shareCode,
		};

		return xmlData;
	}
	return {
		success: 0,
	};
};
