const { HTTP_STATUS } = require('../constants');

function getHealth(_req, res) {
  res.status(HTTP_STATUS.OK).json({
    service: 'aqalbo-backend',
    status: 'ok',
  });
}

module.exports = {
  getHealth,
};
