import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [{
    itemName: 'Coding',
    itemDueDate: '10-10-2021',
    itemPriority: 'low',
    itemCategory: 'Work'
  },
  {
    itemName: 'Traveling',
    itemDueDate: '12-12-2021',
    itemPriority: 'high',
    itemCategory: 'Refreshing'
  },
  {
    itemName: 'Joging',
    itemDueDate: '12-16-2021',
    itemPriority: 'middle',
    itemCategory: 'Mentallity'
  }
  ]
  today: number = Date.now()
  constructor(public modalCtrls: ModalController) { }
  async tambah() {
    const modal = await this.modalCtrls.create({
      component: AddNewTaskPage
    })
    return await modal.present()
  }

}
