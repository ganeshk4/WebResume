import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserDetailsService } from './user/services/user-details.service';
import { ApiService } from './core/services/api.service';
import { UserDetailsComponent } from './user/component/user-details/user-details.component';
import { AuthenticationGuard, MsAdalAngular6Module, MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent
  ],
  imports: [
    MsAdalAngular6Module.forRoot({
      tenant: 'c2d87adf-bfb0-45d5-a624-45629f2b749c',
      clientId: '301c6b16-3e3d-4e80-b429-9a4123653b43',
      redirectUri: window.location.origin,
      endpoints: {
        "https://localhost/Api/": "xxx-bae6-4760-b434-xxx",
      },
      navigateToLoginRequestUrl: true,
      cacheLocation: 'sessionStorage'
    }),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserDetailsService, ApiService, MsAdalAngular6Service, AuthenticationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
