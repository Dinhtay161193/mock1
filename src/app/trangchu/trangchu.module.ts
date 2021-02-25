import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { LichchieuComponent } from './lichchieu/lichchieu.component';
import { LichchieuPhimdangchieuComponent } from './lichchieu-phimdangchieu/lichchieu-phimdangchieu.component';
import { LichchieuPhimsapchieuComponent } from './lichchieu-phimsapchieu/lichchieu-phimsapchieu.component';
import { LichchieuPhimitemComponent } from './lichchieu-phimitem/lichchieu-phimitem.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { UngdungComponent } from './ungdung/ungdung.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { LayoutModule } from '../layout/layout.module';
import { SwiperModule } from 'swiper/angular';
import { SelectfilmComponent } from './selectfilm/selectfilm.component';
import { SearchfilmModule } from '../searchfilm/searchfilm.module';
import { MatDialogModule } from '@angular/material/dialog';

import { PipeModule } from '../shared/pipe/pipe.module';
import { TrangChuRoutingModule } from './trang-chu-routing.module';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    SliderComponent,
    LichchieuComponent,
    LichchieuPhimdangchieuComponent,
    LichchieuPhimsapchieuComponent,
    LichchieuPhimitemComponent,
    TintucComponent,
    UngdungComponent,
    TrangChuComponent,
    SelectfilmComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SwiperModule,
    SearchfilmModule,
    MatDialogModule,
    PipeModule,
    TrangChuRoutingModule,
    AuthModule,
    RouterModule,
  ],
  exports: [TrangChuComponent],
})
export class TrangchuModule {}
