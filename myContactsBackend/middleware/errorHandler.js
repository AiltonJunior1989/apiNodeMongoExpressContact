import { constants } from '../constants.js'

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack });
      break;
    case constants.NOT_FOUND:
      res.json({ title: "Not Found", message: err.message, stackTrace: err.stack });
      break;
    case constants.UNAUTHORIZED:
      res.json({ title: "Unauthorized", message: err.message, stackTrace: err.stack });
      break;
    case constants.FORBBIDEN:
      res.json({ title: "Forbbiden", message: err.message, stackTrace: err.stack });
      break;
    case constants.SERVER_ERROR:
      res.json({ title: "Server Error", message: err.message, stackTrace: err.stack });
      break;
    default:
      console.log('No error, all good!')
      break;
  }

};
