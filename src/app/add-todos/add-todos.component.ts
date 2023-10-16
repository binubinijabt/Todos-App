import { Component } from '@angular/core';
import { MyTodos } from 'src/model/MyTodo';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent {

allTodos:any[]=[];
todosName:string='';
todo:MyTodos={};

constructor(private api:ApiService, private router:Router){}

ngOnInit():void{
  this.api.getAllTodos().subscribe((data:any)=>{
    console.log(data);
    this.allTodos=data;
  });
}

addTodos(){
 this.api.addTodos(this.todo).subscribe((data:any)=>{
  console.log(data);
  
  this.router.navigateByUrl('');
 }) 
}

}
