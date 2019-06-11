'use strict';

/**
 * If route does not exist, function runs and declares error to user
 * @param {} req
 * @param {} res
 * @param {} next
 * @param {} req.statusCode
 * @param {} req.statusMessage
 */

module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};