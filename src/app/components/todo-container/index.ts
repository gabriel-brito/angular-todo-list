import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

type Task = {
  id: number;
  isCompleted: boolean;
  task: string;
};

type Items = Task[];

@Component({
  imports: [FormsModule],
  selector: "todo-app",
  standalone: true,
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.css",
})
export default class TodoApp {
  private latestItemId = 0;
  items: Items = [];
  currentItemTitle = "";


  onKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.addItem();
    }
  }

  addItem() {
    const newTask = this.currentItemTitle;

    if (!newTask || newTask.trim().length === 0) {
      return;
    }

    if (
      this.items.some(
        (item) => item.task.toLocaleLowerCase() === newTask.toLocaleLowerCase(),
      )
    ) {
      return;
    }

    this.items.push({
      id: this.latestItemId + 1,
      task: newTask,
      isCompleted: false,
    });

    this.currentItemTitle = "";
    ++this.latestItemId;
  }

  toggleCompletion(item: Task): void {
    item.isCompleted = !item.isCompleted;
  }

  deleteItem(item: Task): void {
    this.items = this.items.filter(task => task.id !== item.id);
  }
}
