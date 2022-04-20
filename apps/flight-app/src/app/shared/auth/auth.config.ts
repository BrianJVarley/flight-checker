import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://idsvr4.azurewebsites.net',
  redirectUri: window.location.origin + '/index.html',
  clientId: 'spa',
  responseType: 'code',
  scope: 'openid profile email offline_access api',
  timeoutFactor: 0.01 // Test quick token refresh
};
