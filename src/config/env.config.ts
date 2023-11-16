import dotenv from 'dotenv';

dotenv.config();

const { PORT, NODE_ENV } = process.env;

export default {
	port: PORT,
	env: NODE_ENV,
};
