const { HTTP_STATUS } = require('../constants');

function errorHandler(err, _req, res, _next) {
  console.error(err);
  res.status(err.status || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    error: err.message || 'Internal server error',
  });
}

module.exports = {
  errorHandler,
};
