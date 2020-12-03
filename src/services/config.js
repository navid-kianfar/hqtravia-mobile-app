import Config from 'react-native-config/index';
const configuration = {
  ApiVersion: +Config.ApiVersion,
  BackendPort: +Config.BackendPort,
  BackendSslPort: +Config.BackendSslPort,
  BackendIp: Config.BackendIp,
  BackendDomain: Config.BackendDomain,
  DefaultCountry: Config.DefaultCountry,
  DefaultLanguage: Config.DefaultLanguage,
  UseSSL: Config.UseSSL === 'true',
  ShowCountries: Config.ShowCountries === 'true',
  AllowPickCountry: Config.AllowPickCountry === 'true',
  ShowLanguages: Config.ShowLanguages === 'true',
};

export default configuration;
