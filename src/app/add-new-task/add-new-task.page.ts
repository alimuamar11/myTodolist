import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { homedir } from 'os';

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
  constructor(public modalCtrls: ModalController) { }

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
  simpan() {
    this.taskObject = ({
      itemName: this.taskName,
      itemDueDate: this.taskDate,
      itemCategory: this.taskCategory,
      itemPriority: this.taskPriority
    })

    this.kembali()
    // disimpan pada taskObject kemudian nilai dari itemName di isi dari taskName, dst .Dimana item2 tersebut adalah variabel dari home.
  }
}
