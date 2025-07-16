import { AfterViewInit, Component, OnInit } from '@angular/core';
import L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  imports: [],
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.css'
})
export class LeafletMapComponent implements OnInit, AfterViewInit {
  private map!: L.Map
  private markers: L.Marker[] = [
    L.marker([59.48334915587359, 24.68708158905212]),
    L.marker([59.35216572507309, 24.87940483250193])
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initMap();
    this.centerMap();
    this.addMarkersToMap()
  }

  private addMarkersToMap() {
    this.markers.forEach(mark => mark.addTo(this.map));
  }
  
  private initMap() {
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    this.map = L.map('map');
    L.tileLayer(baseMapURl).addTo(this.map);
  }


  private centerMap() {
    // Create a boundary based on the markers
    const bounds = L.latLngBounds(this.markers.map(marker => marker.getLatLng()));
    
    // Fit the map into the boundary
    this.map.fitBounds(bounds);
  }
}
