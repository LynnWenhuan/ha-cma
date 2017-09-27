/* eslint-disable */
import dva from 'dva';
import './style/index.less';

export default(config) => {

  const davParams = config.davParams || {};

  const app = dva(davParams);

  if (config.extend) {
    config.extend(app);
  }

  function router({ history }) {
    return config.router(history);
  }
  app.router(router);

  app.start('#root');

  return app;
};

