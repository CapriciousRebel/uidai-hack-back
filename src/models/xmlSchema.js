import mongoose from 'mongoose';

const { Schema } = mongoose;

const xmlSchema = new Schema({
	xml: String,
});

const xmlModel = mongoose.model('xml', xmlSchema);

export default xmlModel;
