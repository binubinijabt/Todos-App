import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyTodos } from 'src/model/MyTodo';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent  implements OnInit{

  todosId:any;
  todo:MyTodos={};
  // group:MyGroup[] =[] as MyGroup [];
  
  constructor(private activatedRoute:ActivatedRoute, 
  private api:ApiService, 
    private route:Router){}
  
  ngOnInit():void{
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
console.log(data.id);

  this.todosId=data['id'];
  console.log(this.todosId);

  this.api.viewTodos(this.todosId).subscribe((data:any)=>{
    console.log(data);
    this.todo = data;
  
  });
  
  this.api.getAllTodos().subscribe((data:any)=>{
    console.log(data);
    this.todo=data;
   })
  
  });
  

  }
  
  updateTodos(){
    this.api.updateTodos(this.todosId,this.todo).subscribe((data:any)=>{
      console.log(data);
      this.route.navigateByUrl('')

    })
  }
  
  }


