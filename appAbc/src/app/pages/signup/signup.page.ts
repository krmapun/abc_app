import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authservice: AuthService,
    public alertController: AlertController,
    private menu: MenuController) {}

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

  onSubmitRegister() {
    this.authservice.register(this.email, this.password).then(auth => {
      this.presentAlert('¡Éxito!','','Usuario registrado exitosamente');
      console.log(auth);
    }).catch(err => console.log(err));
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }
}
