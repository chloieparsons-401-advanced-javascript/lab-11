'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model');
const auth = require('./middleware');

/**
 * Create a new route for the user to signup with username and password
 * @param {} req
 * @param {} res
 * @param {} next
 * @param {} req.token
 * @param {} req.user
 */

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( (user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    }).catch(next);
});

/**
 * Creates a new route for existing user to sign in
 * @param {} auth
 * @param {} req
 * @param {} res
 * @param {} next
 * @param {} req.token
 */
authRouter.get('/signin', auth, (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

module.exports = authRouter;
