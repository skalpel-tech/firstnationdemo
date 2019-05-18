import { Component, OnInit, NgZone } from '@angular/core';
import { tileLayer, latLng, marker, icon, polyline, Map, geoJSON, circleMarker, Layer } from 'leaflet';
import { MockFirstnationData } from '../models/mock-firstnation-data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  geoJson = geoJSON(MockFirstnationData, {
    pointToLayer: (feature, latlng) => {
        return circleMarker(latlng, {
          radius: 8,
          fillColor: '#f4ba2c',
          color: '#003366',
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        });
    }
  });

  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    },
    overlays: {
      'FirstNation sites': this.geoJson,
    }
  };


  options = {
    layers: [
      this.streetMaps
    ],
    zoom: 7,
    center: latLng([ 50.109412, -122.963695 ])
  };




  constructor(
    private zone: NgZone,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.geoJson.addEventListener('click', (element) => {
      this.zone.run(() => {
        this.open(element);
      });
    });
  }

  open(element) {

    console.log();

    const modalRef = this.modalService.open(DetailComponent, {
      centered: true,
      size: 'lg'
    });
    modalRef.componentInstance.firstNationProperties = element.layer.feature.properties;
    modalRef.result.then((result) => {
    });
  }

  onMapReady(map: L.Map) {
    this.geoJson.addTo(map);
  };

}
