import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw12';
  taskName: string;
  taskLists: Array<any> = [{
    name: 'HTML5',
    status: true,
    process: 'Done'
  },
  {
    name: 'CSS3',
    status: true,
    process: 'Done'
  },
  {
    name: 'SCSS/SASS',
    status: false,
    process: 'In PROGRESS'
  },
  {
    name: 'JavaScript',
    status: false,
    process: 'In PROGRESS'
  },
  {
    name: 'jQuery',
    status: false,
    process: 'In PROGRESS'

  },
  {
    name: 'Angular',
    status: false,
    process: 'In PROGRESS'

  },
  ];
  addTask(): void {
    if (this.taskName.length !== 0) {
      const newTask = {
        name: this.taskName,
        status: false,
        process: 'In PROGRESS'
      }
      this.taskLists.push(newTask)
      this.taskName = '';
    }
  }
}
