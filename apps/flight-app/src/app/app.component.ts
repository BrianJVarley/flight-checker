import {Component} from '@angular/core';
import { LoggerService } from '@flight-workspace/logger-lib';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './shared/auth/auth.config';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private loggerService: LoggerService,
    private oauthService: OAuthService
  ) {
    this.loggerService.log('log');
    this.loggerService.debug('debug log');

    // Stage: OAuth Configuration
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.oauthService.setupAutomaticSilentRefresh();
  }
}


