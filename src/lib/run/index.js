/* eslint-disable */
import dva from 'dva';
import { createMemoryHistory } from 'dva/router';
// import { createNavigatorRouter } from 'react-native-navigator-router';
import { createNavigatorRouter } from './nav';


export default(config) => {
  let davParams = config.davParams || {};
  if(!davParams.history){
    davParams.history = createMemoryHistory('/');
  }
  const app = dva(davParams);

  if (config.extend) {
    config.extend(app);
  }

  function router({ history }) {
    return config.router(history, createNavigatorRouter());
  }
  app.router(router);
  const App = app.start();
  return App;
};