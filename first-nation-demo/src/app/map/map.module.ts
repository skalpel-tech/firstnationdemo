import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { IndexComponent } from './index/index.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { DetailComponent } from './detail/detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [IndexComponent, DetailComponent],
  entryComponents: [DetailComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    LeafletModule,
    NgbModule
  ],
  exports: [DetailComponent]
})
export class MapModule { }
