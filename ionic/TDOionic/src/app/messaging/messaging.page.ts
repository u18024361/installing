import { Component, OnInit } from '@angular/core';
import { ReplyPage } from '../messaging/reply/reply.page';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.page.html',
  styleUrls: ['./messaging.page.scss'],
})
export class MessagingPage implements OnInit {

  constructor(public modalController: ModalController,public alertController: AlertController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ReplyPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      
      message: 'Message sent',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  

  ngOnInit() {
  }

}
