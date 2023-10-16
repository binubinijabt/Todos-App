import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MyTodos } from 'src/model/MyTodo';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

allTodos:MyTodos[] = [];
searchKey:string = '';

  constructor (private api:ApiService ){}
  ngOnInit():void{
    this.getAllTodos();
  
  }

  getAllTodos(){ 
  this.api.getAllTodos().subscribe((data:any)=>{
    console.log(data);
    this.allTodos=data;


  })
}
  
 
nameChange(){
  alert('name change')
}


search(event:any){
  console.log(event.target.value);
  this.searchKey=event.target.value;
}



  deleteTodos(todosId:any){
    this.api.deleteTodos(todosId).subscribe((data:any)=>{
      console.log(data);
      this.getAllTodos();
      alert('todo deleted')
      
    });
  }



}
