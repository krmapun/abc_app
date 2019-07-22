import { Component, OnInit } from '@angular/core';
import { NotiI } from '../../models/noti.interface';
import { NotiService } from '../../services/noti.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-notidetalle',
  templateUrl: './notidetalle.page.html',
  styleUrls: ['./notidetalle.page.scss'],
})


export class NotidetallePage implements OnInit {

  noti: NotiI = {
    titulo: '',
    cuerpo: '',
  };
  notiId = null;
  
  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private notiservice: NotiService,
    private loadingcontroller: LoadingController,
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


}
