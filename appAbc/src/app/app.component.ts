import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Social Networks',
      url: '/social',
      icon: 'md-person-add'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'md-alert'
    }
  ];

  constructor(
    public authservice: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private socialSharing: SocialSharing,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  signOut(){
    this.authservice.logout();
  }
  share(){
    this.socialSharing.share('Has parte de ABC Aeronautico', null, null, 'https://abcaeronautico.com/')
    .then(()=>{

      }
    ).catch(()=>{

      }
    );
  }
}
