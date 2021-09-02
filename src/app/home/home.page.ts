import { Component } from '@angular/core';

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
  constructor() { }

}
