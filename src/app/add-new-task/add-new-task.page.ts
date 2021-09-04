import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = ['Kerja', 'Liburan', 'Olahraga']

  taskName
  taskDate
  taskCategory
  taskPriority

  taskObject
  constructor(public modalCtrls: ModalController, public todoService: TodoService) {

  }

  ngOnInit() {
  }

  async kembali() {
    await this.modalCtrls.dismiss(this.taskObject)
  }
  // taskObject di inisialisasi duluu
  kategoriTerpilih(index) {
    this.taskCategory = this.categories[index]
    // nilai dari tasCategory di isi oleh categories ke [index] yang dikirim dari event click kategoriTerpilih
    // kemudian karena nilai telah ada baru dikirim ke home melalui event simpan()
  }
  async simpan() {
    this.taskObject = ({
      itemName: this.taskName,
      itemDueDate: this.taskDate,
      itemCategory: this.taskCategory,
      itemPriority: this.taskPriority
    })
    // console.log(this.taskObject);
    let uid = this.taskName + this.taskDate
    // key / uid dapat dilihat di console yang keluar dan sama
    if (uid) {
      await this.todoService.addTask(uid, this.taskObject)
      // Jika uid yaitu taskname dan taskdate salah satu ada isi maka lakukan simpan
    } else {
      console.log("kosong");
    }
    this.kembali()
    // disimpan pada taskObject kemudian nilai dari itemName di isi dari taskName, dst .Dimana item2 tersebut adalah variabel dari home.
  }
}
