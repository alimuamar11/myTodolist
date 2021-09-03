import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  constructor(public modalCtrls: ModalController) { }

  ngOnInit() {
  }

  async kembali() {
    await this.modalCtrls.dismiss()
  }
}
