import { HTTP_STATUS } from '../constants/index.js';

export function errorHandler(err, _req, res, _next) {
  console.error(err);
  res.status(err.status || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    error: err.message || 'Internal server error',
  });
}

export default errorHandler;
