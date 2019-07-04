import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

  public email: string;

  constructor(
    public authservice: AuthService,
    private menu: MenuController,
    public router: Router,
    public alertController: AlertController,
    public loadingController: LoadingController ) { }

  ngOnInit() {
  }

  async presentAlert(titulo, subtitulo, contenido) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitulo,
      message: contenido,
      buttons: ['OK']
    });

    await alert.present();
  }

  async onSubmitReset() {
    let loading = await this.loadingController.create({
      message: 'Enviando...'
    });
    await loading.present();
    await this.authservice.resetpass(this.email);
    loading.dismiss();
    this.presentAlert('¡Éxito!','','Se ha enviado restauracion al correo ingresado');
    this.router.navigate(['/signin']);
  }
  
  ionViewWillEnter() {
    this.menu.enable(false);
  }
}
