import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldAppearanceExampleComponent } from './form-field-appearance-example/form-field-appearance-example.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { TrailerComponent } from './trailer/trailer.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [FormFieldAppearanceExampleComponent, TrailerComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
  ],
  exports: [FormFieldAppearanceExampleComponent, TrailerComponent],
})
export class SearchfilmModule {}
