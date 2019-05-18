import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FirstNationProperty } from '../models/first-nation-property';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {


  @Input() public firstNationProperties: FirstNationProperty;

  properties: Map<string, string>;

  constructor(
    private activeModal: NgbActiveModal
  ) { }


  onCancel(): void {
    this.activeModal.close();
  }

  ngOnInit() {
  }

}
