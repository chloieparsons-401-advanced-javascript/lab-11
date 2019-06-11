'use strict';

const User = require('./users-model.js');

/**
 * Exports middleware auth check
 * @param {} req
 * @param {} res
 * @param {} next
 * @param {} authString
 * @param {} case
 */

module.exports = (req, res, next) => {

  try {

    let [authType, authString] = req.headers.authorization.split(/\s+/);

    // BASIC Auth  ... Authorization:Basic ZnJlZDpzYW1wbGU=

    switch(authType.toLowerCase()) {
      case 'basic':
        return _authBasic(authString);
      default:
        return _authError();
    }

  } catch(e) {
    return _authError();
  }

  /**
   * Check basic authentication
   * @param {} authString 
   * @param {} base64Buffer
   * @param {} password
   */
  function _authBasic(authString) {
    let base64Buffer = Buffer.from(authString,'base64'); // <Buffer 01 02...>
    let bufferString = base64Buffer.toString(); // john:mysecret
    let [username,password] = bufferString.split(':');  // variables username="john" and password="mysecret"
    let auth = {username, password};  // {username:"john", password:"mysecret"}

    return User.authenticateBasic(auth)
      .then( user => _authenticate(user) );
  }

  /**
   * Check if the current user is authenticated
   * @param {} user 
   * @param {} req.user
   */
  function _authenticate(user) {
    if ( user ) {
      req.user = user;
      req.token = user.generateToken()
      next();
    
    } else {
      _authError();
    }
  }

  /**
   * Throw error, return 401
   * @param {401}
   * @param {'Unauthorized'}
   * @param {'Invalid User ID/Password'}
   */
  function _authError() {
    next({status: 401, statusMessage: 'Unauthorized', message: 'Invalid User ID/Password'});
  }

};

