import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService) {}

  // todo: Try this package related to Auth and multiple modules:
  // https://www.npmjs.com/package/@angular-architects/module-federation

  get userName(): string {
    const claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims.given_name : null;
  }

  login(): void {
    // bob / bob
    this.oauthService.initLoginFlow();
  }

  logout(): void {
    this.oauthService.logOut();
  }
}
