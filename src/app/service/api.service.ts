import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyTodos } from 'src/model/MyTodo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3000/todos';
  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<MyTodos> {
    return this.http.get(this.baseUrl);
  }

  //Api call for fetch particular todo details

  viewTodos(todosId:any) {
    // http://localhost:3000/todos/c1
    return this.http.get(`${this.baseUrl}/${todosId}` );
  }


  //function for adding new todo to server

  addTodos(todosBody: any) {
    return this.http.post(this.baseUrl, todosBody);
  }

  //function for deleting contact from server

  deleteTodos(todosId: any) {
    return this.http.delete(`${this.baseUrl}/${todosId}`);
  }

  //function for updating contact from server
  updateTodos(todosId: any, todosBody: any) {
    return this.http.put(`${this.baseUrl}/${todosId}`, todosBody);
  }
}






