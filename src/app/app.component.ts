import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent {
  title = 'TO DO LIST';

  filter: 'all' | 'active' | 'done' = 'all';

  items = [
    { description: 'study Angular', done: true },
    { description: 'eat dinner', done: false },
    { description: 'work out', done: false },
  ];

  // add
  addItem(description: string) {
    if (!description) return;

    this.items.unshift({
      description,
      done: false,
    });
  }

  get filteredItems() {
    if (this.filter === 'all') {
      return this.items;
    }
    return this.items.filter((item) => {
      this.filter === 'done' ? item.done : !item.done;
    });
  }
}
