import { Component, OnInit } from '@angular/core';
import { NotiI } from '../../models/noti.interface';
import { NotiService } from '../../services/noti.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-notidetalle',
  templateUrl: './notidetalle.page.html',
  styleUrls: ['./notidetalle.page.scss'],
})


export class NotidetallePage implements OnInit {

  noti: NotiI = {
    titulo: '',
    cuerpo: '',
    date: '',
    img: '',
    url: ''
  };
  notiId = null;
  
  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private notiservice: NotiService,
    private loadingcontroller: LoadingController,
    private socialSharing: SocialSharing,
  ) { }

  ngOnInit() {


    this.notiId = this.route.snapshot.params.id;
    console.log('id ->'+this.notiId);
    if (this.notiId) {
      this.loadNoti();
    }
  }

  async loadNoti() {
    const loading = await this.loadingcontroller.create({
      message: 'Cargando.....'
      });
    await loading.present();
    this.notiservice.getNoti(this.notiId).subscribe( res =>{
      console.log(res);
      loading.dismiss();
      this.noti = res;
    });
  }

  shareNoti(){
    // tslint:disable-next-line: max-line-length
      this.socialSharing.share(this.noti.titulo, this.noti.date, null, this.noti.url)
        .then(()=>{}).catch(()=>{}
      );
  }
}
