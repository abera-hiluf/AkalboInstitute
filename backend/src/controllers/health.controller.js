import { HTTP_STATUS } from '../constants/index.js';

export function getHealth(_req, res) {
  res.status(HTTP_STATUS.OK).json({
    service: 'aqalbo-backend',
    status: 'ok',
  });
}

export default {
  getHealth,
};
