/* eslint-disable */
import User from './User';
import Users from './Users';

export default function registerModels(app) {
  app.model(User);
  app.model(Users);
}
