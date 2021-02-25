import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthuRoutingModule } from './authu-routing.module';
import { AuthRegisterComponent } from './auth-register.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigninComponent, SignupComponent, AuthRegisterComponent],
  imports: [
    CommonModule,
    AuthuRoutingModule,
    RouterModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [SigninComponent, SignupComponent, AuthRegisterComponent],
})
export class AuthModule {}
