const logger = require("./logger");

const unknownEndpoint = (req, resp) => {
  resp.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  logger.error(error);
  next(error);
};

module.exports = { unknownEndpoint, errorHandler };
