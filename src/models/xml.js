import unzipper from 'unzipper';
import xmlModel from './xmlSchema';

export const saveXML = async (xmlData) => {
	const newXML = new xmlModel(xmlData);
	const result = await newXML.save();
	// eslint-disable-next-line no-underscore-dangle
	return result._id;
};

export const sendXML = async (xmlId, pwd) => {
	const xml = await xmlModel.findById(xmlId);
	const buffer = Buffer.from(xml.xml, 'base64');
	const A = await unzipper.Open.buffer(buffer);
	const data = await A.files[0].buffer(pwd);
	return data.toString();
};
