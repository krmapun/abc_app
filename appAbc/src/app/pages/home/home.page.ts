import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public userdata: {};

  constructor (public authservice: AuthService,
               private menu: MenuController,
               public AFauth: AngularFireAuth,
               private iab: InAppBrowser )
  {
    this.AFauth.authState.subscribe(user => {
      this.userdata = user;
    });
  }
  signOut(){
    this.authservice.logout();
  }
  ionViewWillEnter() {
    this.menu.enable(true);
  }

  openBlank(){
    this.iab.create('https://abcaeronautico.com/index.html', '_blank');
  }

  openSystem(){
    this.iab.create('https://abcaeronautico.com/index.html', '_system');
  }

}
