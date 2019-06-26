import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {

  constructor(public authservice: AuthService,
              private iab: InAppBrowser) { }

  ngOnInit() {
  }

  signOut(){
    this.authservice.logout();
  }
  openBlankBt1(){
    this.iab.create('https://abcaeronautico.com/directorio', '_system');
  }

}
