import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  

  todosId: string = '';
  todo:any='';
  todoId:string='';

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data); //{TodosId : 'c1'}
      this.todosId = data.todosId;
      console.log(this.todosId); //c1

      //Api call

      this.api.viewTodos(this.todosId).subscribe((data: any) => {
        console.log(data);
        this.todo=data;
        this.todosId = data.todosId;
        console.log(this.todo); //particular contact details

        
        
      });
    });
  }
}



