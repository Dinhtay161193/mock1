import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthRegisterComponent } from './auth/auth-register.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TrangChuComponent } from './trangchu/trang-chu/trang-chu.component';

const routes: Routes = [
  {
    path: '',
    component: TrangChuComponent,
  },
  {
    path: 'admin',
    component: AuthRegisterComponent,
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
