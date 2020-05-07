import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { UserDetailsComponent } from './user/component/user-details/user-details.component';


const routes: Routes = [
  { path: '', component: UserDetailsComponent, pathMatch: 'full', canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
