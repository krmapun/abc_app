import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

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
    private menu: MenuController,
    public router: Router,
    public loadingController: LoadingController) {}

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

  async onSubmitRegister() {
    let loading = await this.loadingController.create({
      message: 'Guardando...'
    });
    await loading.present();
    this.authservice.register(this.email, this.password).then(auth => {
      loading.dismiss();
      this.presentAlert('¡Éxito!','','Usuario registrado exitosamente');
      console.log(auth);
      this.router.navigate(['/signin']);
    }).catch(err => {loading.dismiss(); console.log(err);});
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }
}
