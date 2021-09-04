import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = []
  today: number = Date.now()
  constructor(public modalCtrls: ModalController, public todoService: TodoService) {
    this.getAll()
  }
  async tambah() {
    const modal = await this.modalCtrls.create({
      component: AddNewTaskPage
    })
    modal.onDidDismiss().then(newTaskObj => {
      // console.log(newTaskObj.data)
      this.getAll()

    })
    return await modal.present()
  }
  getAll() {
    this.todoList = this.todoService.getAlltasks();
    // console.log(this.todoService.getAlltasks());

  }
  hapus(key) {
    // console.log(key);
    this.todoService.deleteTask(key)
    this.getAll()

  }

}
