import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, icon, polyline, Map, geoJSON, circleMarker } from 'leaflet';
import { MockFirstnationData } from '../models/mock-firstnation-data';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 7,
    center: latLng([ 50.109412, -122.963695 ])
  };

  ngOnInit() {  }

  constructor() { }

  onMapReady(map: L.Map) {

    geoJSON(MockFirstnationData, {
      pointToLayer: function (feature, latlng) {
          return circleMarker(latlng, {
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
          });
      },
      onEachFeature: function(feature, layer) {
        layer.on('click', function(element) {
          alert(JSON.stringify(element['sourceTarget']['feature']['properties']));
        })
      }
    }).addTo(map);
  }

}
