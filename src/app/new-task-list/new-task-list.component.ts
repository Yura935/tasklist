import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.css']
})
export class NewTaskListComponent implements OnInit {
  @Input() getLists: Array<any>;
  @Output() length1: EventEmitter<number> = new EventEmitter<number>();
  name: string
  hiden = false
  changeIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

  check(b: boolean, i: number): void {
    if (b) {
      this.getLists[i].status = false;
      this.getLists[i].process = 'In PROGRESS';
    }
    else {
      this.getLists[i].status = true;
      this.getLists[i].process = 'Done';
    }
  }

  delete(index: number): void {
    this.getLists.splice(index, 1);
  }

  edit(index: number) {
    this.name = this.getLists[index].name;
    this.hiden = true;
    this.changeIndex = index;
  }
  
  save(): void {
    this.getLists[this.changeIndex].name = this.name;
    this.name = '';
    this.hiden = false;
  }
}
