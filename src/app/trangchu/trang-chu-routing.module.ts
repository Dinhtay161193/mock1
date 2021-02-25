import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRegisterComponent } from '../auth/auth-register.component';

import { TrangChuComponent } from './trang-chu/trang-chu.component';

const routes: Routes = [
  {
    path: '',
    component: TrangChuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TrangChuRoutingModule {}
