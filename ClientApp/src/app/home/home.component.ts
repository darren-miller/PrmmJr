import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  mapObj: any;
  MoW: any;

  ngOnInit() {
    //addMapjsFile(this.mapData.MapOfTheWorldURL);
    this.addMapjsFile("https://map.nga.mil/api/mow.js");
  }

  addMapjsFile(mapUrl) {
    try {
      return new Promise((resolve, reject) => {
        const node = document.createElement('script');
        node.src = mapUrl;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        node.onload = () => resolve(this.initMap());
        node.onerror = () => reject(false);
        document.getElementsByTagName('head')[0].appendChild(node);
      });
    }
    catch (err) {
      console.log(err);
      return null;
    }
  }

  initMap() {
    this.MoW = window['MoW'];
    if (typeof this.MoW === 'object') {
    //this code is in PRMM, but when I put it in this app the map would not show because it said height or width = 0
    //  const container = document.getElementById('mapContainer');
    //  const node = document.createElement('div');
    //  node.id = 'map_div';
    //  container.appendChild(node);

      this.MoW.ready(() => {
        if (!this.mapObj) {
          this.mapObj = new this.MoW.Map({
            target: 'mapContainer',
            displayProfile: this.MoW.Map.DISPLAY_PROFILE.STANDALONE
          });
          window['mapObj'] = this.mapObj;
        }

        window['mapObj'].setOverlay('overlayBoundariesPolitical');
        window['mapObj'].setCoordinateFormat('DMS');
        document.dispatchEvent(new CustomEvent('mapReady'));
      });
      return true;
    }
    else {
      return false;
    }
  }

  GetMoW() {
    return window['MoW'];
  }

  GetMapObj() {
    return window['mapObj'];
  }

}
