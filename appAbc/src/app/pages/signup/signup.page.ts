import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegistroService } from '../../services/registro.service';
import { TaskI } from '../../models/task.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {


  todo: TaskI = {
    motte: null,
    contacto: null,
    ciudad: null,
    email: null,
  };
  public password: string;
  todoId = null;

  constructor(
    public authservice: AuthService,
    public alertController: AlertController,
    private menu: MenuController,
    public router: Router,
    public loadingController: LoadingController,
    private todoservice: RegistroService,) {}

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
    const loading = await this.loadingController.create({
      message: 'Guardando...'
    });
    console.log(this.todo);
    await loading.present();
    
    this.authservice.register(this.todo.email, this.password).then(auth => {

      
      this.todoservice.addTodo(this.todo).then(() => {}).catch(err => {console.log(err);});
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
