import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Todo List";
  todoList: any[] = [];
  todoTitle = "";
  ngOnInit(): void {
    this.todoList = [{ title: "Install Angular CLI", isDone: false }];
  }

  deleteTodo(todo: any) {
    const index = this.todoList.findIndex((todoItem) => todoItem === todo);
    this.todoList.splice(index, 1);
  }
}
