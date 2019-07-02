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
  openfb(){
    this.iab.create('https://www.facebook.com/abcaeronautico', '_system');
  }
  openins(){
    this.iab.create('https://www.instagram.com/abcaeronautico', '_system');
  }
  openyou(){
    this.iab.create('https://www.youtube.com/channel/UC6XvSL4w0Cpmd2T9nD_7_pA', '_system');
  }
  openlink(){
    this.iab.create('https://www.linkedin.com/in/abc-aeron%C3%A1utico?originalSubdomain=co', '_system');
  }
  opentw(){
    this.iab.create('https://twitter.com/abcaeronautico', '_system');
  }

}
