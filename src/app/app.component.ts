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
  title = 'todolist';

  filter: 'all' | 'active' | 'done' = 'all';

  Items = [
    { description: 'study Angular', done: true },
    { description: 'eat dinner', done: false },
  ];

  get filteredItems() {
    if (this.filter === 'all') {
      return this.Items;
    }
    return this.Items.filter((item: any) => {
      this.filter === 'done' ? item.done : !item.done;
    });
  }
}
