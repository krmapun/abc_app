import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

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

  openBlankBt1(){
    this.iab.create('https://abcaeronautico.com/directorio', '_system');
  }
  openBlankBt2(){
    this.iab.create('https://abcaeronautico.com/noticias.html', '_system');
  }
  openBlankBt3(){
    this.iab.create('https://abcaeronautico.com/eventos1.html', '_system');
  }
  openBlankBt4(){
    this.iab.create('https://abcaeronautico.com/boletin1.html', '_system');
  }
  openBlankBt5(){
    this.iab.create('https://abcaeronautico.com/air-channel.html', '_system');
  }
  openBlankBt6(){
    this.iab.create('https://abcaeronautico.com/galeria/', '_system');
  }
  openBlankBt7(){
    this.iab.create('https://abcaeronautico.com/fichas-t%C3%A9cnicas.html', '_system');
  }


}
