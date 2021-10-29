const controller = {
	home: (req, res) => res.status(200).json({
		success: 1,
		data: 'Welcome To /',
	}),
};

export default controller;
