import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  constructor(public modalCtrl: ModalController) {}

  openModal() {

    //let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    //modal.present();
  }
}


