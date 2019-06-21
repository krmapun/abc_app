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

  openBlankBt1(){
    this.iab.create('https://abcaeronautico.com/directorio', '_blank');
  }
  openBlankBt2(){
    this.iab.create('https://abcaeronautico.com/noticias.html', '_blank');
  }
  openBlankBt3(){
    this.iab.create('https://abcaeronautico.com/eventos1.html', '_blank');
  }
  openBlankBt4(){
    this.iab.create('https://abcaeronautico.com/boletin1.html', '_blank');
  }
  openBlankBt5(){
    this.iab.create('https://abcaeronautico.com/air-channel.html', '_blank');
  }
  openBlankBt6(){
    this.iab.create('https://abcaeronautico.com/galeria/', '_blank');
  }
  openBlankBt7(){
    this.iab.create('https://abcaeronautico.com/fichas-t%C3%A9cnicas.html', '_blank');
  }


}
