import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

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
    public alertController: AlertController ) { }

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

  onSubmitReset() {
    this.authservice.resetpass(this.email);
    this.presentAlert('¡Éxito!','','Se ha enviado restauracion al correo ingresado');
  }
  
  ionViewWillEnter() {
    this.menu.enable(false);
  }
}
