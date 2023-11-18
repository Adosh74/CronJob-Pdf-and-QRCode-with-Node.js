import express from 'express';
import { ErrorMiddleware } from './middleware/error.middleware';
import routes from './routes/index.route';
import ErrorHandler from './utils/ErrorHandler';

export const app = express();

app.use(express.static('public'));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.status(200).json({
		success: true,
		message: 'This is app a cron job, pdf generator and qr code generator app',
	});
});
app.get('/healthz', (req, res) => {
	res.status(200).json({
		success: true,
		message: 'Ok',
	});
});

// routes
app.use('/api', routes);

app.all('*', (req, res, next) => {
	next(new ErrorHandler(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(ErrorMiddleware);
