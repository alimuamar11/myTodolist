import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = []
  today: number = Date.now()
  constructor(public modalCtrls: ModalController) { }
  async tambah() {
    const modal = await this.modalCtrls.create({
      component: AddNewTaskPage
    })
    modal.onDidDismiss().then(newTaskObj => {
      // console.log(newTaskObj.data)
      this.todoList.push(newTaskObj.data)

    })
    return await modal.present()
  }

}
