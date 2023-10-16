import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddTodosComponent } from './add-todos/add-todos.component';

const routes: Routes = [{
  path:'',redirectTo:'home-page/admin',pathMatch:'full'
// :- http://localhost:4200

},

// http://localhost:4200/contact/admin

{
path:'home-page/admin',component:HomePageComponent

},
// http://localhost:4200/contact/add
{
path:'home-page/add',component:AddTodosComponent
},
// http://localhost:4200/contact/update
{
path:'home-page/update/:id',component:UpdateProductComponent
},
// http://localhost:4200/contact/view
{
path:'home-page/view/:todosId',component:ViewProductComponent

},
// http://localhost:4200/admin-pagenotfound

{
path:'**',component:PageNotFoundComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
