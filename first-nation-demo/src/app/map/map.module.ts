import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { IndexComponent } from './index/index.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    LeafletModule
  ]
})
export class MapModule { }
