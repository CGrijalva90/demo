// Helpers function below

const logErrors = function (err, req, res, next) {
  if (err) {
    /* eslint no-console: off */
    console.error(`Error: ${err.message}\r\nStack: ${err.stack}`);
    if (next) {
      next(err);
    }
  }
};

module.exports.logErrors = logErrors;
