import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

export const AuthGuard: CanActivateFn = (route, state) => {
  const oauthService: OAuthService = inject(OAuthService);

  var hasIdToken = oauthService.hasValidIdToken();
  var hasAccessToken = oauthService.hasValidAccessToken();

  let url: string = state.url;

  var canAccess = (hasIdToken && hasAccessToken);

  if (!canAccess) {
    oauthService.initLoginFlow();
    return canAccess;
  }
  
  return true;  
};
