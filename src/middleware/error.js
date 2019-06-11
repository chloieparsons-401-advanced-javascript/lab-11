'use strict';

/**
 * If route does not exist, function runs and declares error to user
 * @param {} err
 * @param {} req
 * @param {} res
 * @param {} next
 * @param {} req.statusCode
 * @param {} req.statusMessage
 */

module.exports = (err, req, res, next) => {
  console.error('__SERVER_ERROR__', err);
  let error = { error: err.message || err };
  res.statusCode = err.status || 500;
  res.statusMessage = err.statusMessage || 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(error) );
  res.end();
};
