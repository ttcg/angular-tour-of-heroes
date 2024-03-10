import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs';
import { OAuthConfig } from './oauthConfig';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, HeroesComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private oauthService: OAuthService) {

    this.oauthService.configure(OAuthConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.oauthService.setupAutomaticSilentRefresh();

    this.oauthService.events
      .pipe(filter((e) => ["token_received"].includes(e.type)))
      .subscribe((e) => this.oauthService.loadUserProfile());
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public get userName() {

    var claims = this.oauthService.getIdentityClaims();

    if (!claims) return null;

    return claims['given_name'];
  }
}
