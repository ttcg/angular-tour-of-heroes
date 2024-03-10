import { provideHttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { provideOAuthClient } from "angular-oauth2-oidc";


beforeEach(() => {
  TestBed.configureTestingModule(
    {
      providers: [provideHttpClient(), provideOAuthClient()]
    });
});