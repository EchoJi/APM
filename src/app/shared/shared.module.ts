import { FormsModule } from '@angular/forms';
import { StartComponent } from './start.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StartComponent],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, StartComponent],
})
export class SharedModule {}
