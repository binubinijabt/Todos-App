import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allTodos:any[],searchKey:string,propName:string): any[] {

const result:any=[]

if (!allTodos|| searchKey==''|| propName=='') {
  return allTodos
}

allTodos.forEach((todo:any)=>{

  if(todo[propName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
    result.push(todo)
  }

})

    return result;
  }

}

