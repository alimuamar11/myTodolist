import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
  @Input() task;
  //sprti ambil value dari inputan
  categories = ['Kerja', 'Liburan', 'Olahraga']

  taskName
  taskDate
  taskCategory
  taskPriority

  taskObject
  constructor(public modalCtrls: ModalController, public todoService: TodoService) { }

  ngOnInit() {
    // console.log(this.task);
    this.taskName = this.task.value.itemName
    this.taskDate = this.task.value.itemDueDate
    this.taskCategory = this.task.value.itemCategory
    this.taskPriority = this.task.value.itemPriority
  }
  async kembali() {
    await this.modalCtrls.dismiss()
  }
  kategoriTerpilih(index) {
    this.taskCategory = this.categories[index]
  }
  async simpan_ubah() {
    this.taskObject = ({
      itemName: this.taskName,
      itemDueDate: this.taskDate,
      itemCategory: this.taskCategory,
      itemPriority: this.taskPriority
    })
    let uid = this.task.key
    await this.todoService.updateTask(uid, this.taskObject)
    this.kembali()
  }
}