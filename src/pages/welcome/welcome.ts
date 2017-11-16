import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
} from '@ionic-native/google-maps';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  map: GoogleMap;
  mapElement: HTMLElement;
  constructor(public navCtrl: NavController) { }
  ionViewDidLoad() {
      this.loadMap();
  }
  loadMap() {
      this.mapElement = document.getElementById('map');
      let mapOptions: GoogleMapOptions = {
        controls: {
          compass: false,
          myLocationButton: false,
          indoorPicker: false,
          mapToolbar: false
        },
        camera: {
          target: {
            lat: 40.1817318,
            lng: 44.5122556
          },
          zoom: 8
        },
        styles: [{
          stylers: [{
            saturation: -100
          }]
        }]
      };

      if (!this.map) {
        console.log('map loading');
        this.map = GoogleMaps.create(this.mapElement, mapOptions);
        this.map.one('map_ready')
          .then((map) => {
            console.log(map);
          }).catch(error => {
          console.log('Error getting location' + JSON.stringify(error));
        });
      }
  }
}
