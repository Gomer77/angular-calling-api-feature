import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent {

  @Output() add = new EventEmitter();
  @Output() deleteAll = new EventEmitter();

  addItem(): void {
    this.add.emit()
  }

  deleteAllItems(): void {
    this.deleteAll.emit()
  }

  
  
}
