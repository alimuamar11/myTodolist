import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: Storage) {
    this.init()
  }
  addTask(key, value) {
    this.storage.set(key, value)
  }
  deleteTask(key) {
    this.storage.remove(key)
  }
  updateTask() {

  }
  getAlltasks() {
    let tasks: any = []
    this.storage.forEach((key, value, index) => {
      tasks.push({ 'key': value, 'value': key })
      // console.log(key);
    });
    return tasks
  }

  async init() {
    await this.storage.create()
  }
  // execute everytime use this storage taruh di constructor
}
