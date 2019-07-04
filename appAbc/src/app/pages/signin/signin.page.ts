import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  email: string;
  password: string;
  constructor(
    public alertController: AlertController ,
    private authService: AuthService,
    public router: Router,
    private menu: MenuController,
    public loadingController: LoadingController) { }

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
  async onSubmitLogin(){
    let loading = await this.loadingController.create({
      message: 'Bienvenido...'
    });
    await loading.present();
    this.authService.login(this.email, this.password).then( res => {
      loading.dismiss();
      this.router.navigate(['/home']);
    }).catch(err => {loading.dismiss(); this.presentAlert('¡Advertencia!','','El Usuario ó la contraseña no coinciden');})
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

}
