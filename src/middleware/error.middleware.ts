import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/ErrorHandler';

export const ErrorMiddleware = (
	err: ErrorHandler,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	err.statusCode = err.statusCode || 500;
	err.message = err.message || 'Internal Server Error';

	console.log(err);

	res.status(err.statusCode).json({
		status: 'error',
		message: err.message,
	});
};
