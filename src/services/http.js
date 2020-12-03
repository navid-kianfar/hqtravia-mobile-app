import Config from './config';
import AppState from './app-state';
import Axios from 'axios';
import OperationResult from '../library/operation-result';

const apiUrl = section => {
  const protocol = Config.UseSSL ? 'https://' : 'http://';
  let port = Config.UseSSL ? Config.BackendSslPort : Config.BackendPort;
  if (port === '80' || port === '443') port = '';
  else port = ':' + port;
  return `${protocol}${Config.BackendDomain}${port}/api/v${
    Config.ApiVersion
  }/${section}`;
};

const post = async (section, params) => {
  return new Promise(resolve => {
    const url = apiUrl(section);
    Axios.post(url, params, {
      headers: {Authorization: AppState.AuthToken},
    })
      .catch(err => {
        resolve(OperationResult.failed(err));
      })
      .then(res => resolve(res));
  });
};

const get = async (section, params) => {
  return new Promise(resolve => {
    const url = apiUrl(section);
    Axios.get(url, params, {
      headers: {Authorization: AppState.AuthToken},
    })
      .catch(err => {
        resolve(OperationResult.failed(err));
      })
      .then(res => resolve(res));
  });
};

export default {post, get};
