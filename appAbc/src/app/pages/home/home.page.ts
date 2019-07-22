import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NotiI } from '../../models/noti.interface';
import { NotiService } from '../../services/noti.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public userdata: {};
  notis: NotiI[];
  constructor (
               private socialSharing: SocialSharing,
               public authservice: AuthService,
               private menu: MenuController,
               public AFauth: AngularFireAuth,
               private iab: InAppBrowser,
               private notiservice: NotiService)
  {
    this.AFauth.authState.subscribe(user => {
      this.userdata = user;
    });
  }

  ngOnInit(){
    this.notiservice.getNotis().subscribe( res => {
      console.log(res);
      this.notis = res;
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
    this.iab.create('https://abcaeronautico.com/fichas-t%C3%A9cnicas.html', '_system');
  }
  openBlankBt3(){
    this.iab.create('https://abcaeronautico.com/galeria/', '_system');
  }
  openBlankBt4(){
    this.iab.create('https://abcaeronautico.com/air-channel.html', '_system');
  }
  openBlankBt5(){
    this.iab.create('https://abcaeronautico.com/eventos1.html', '_system');
  }
  openBlankBt6(){
    this.iab.create('https://abcaeronautico.com/noticias.html', '_system');
  }
  openBlankBt7(){
    this.iab.create('https://abcaeronautico.com/boletin1.html', '_system');
  }
  openBlankpauta(){
    this.iab.create('http://www.fiac.aero/', '_system');
  }

  share(){
// tslint:disable-next-line: max-line-length
    this.socialSharing.share('Has parte de ABC Aeronautico', null, null, 'https://play.google.com/store/apps/details?id=com.krmapun.appAbc&hl=es')
    .then(()=>{

      }
    ).catch(()=>{

      }
    );
  }

}
