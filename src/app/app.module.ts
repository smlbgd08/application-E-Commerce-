import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes , RouterModule  } from '@angular/router'


import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component'
import { TasksComponent } from './tasks/tasks.component';
import { CaddiesComponent } from './caddies/caddies.component';



const routes :Routes = [
  {'path' : 'product/:p1/:p2' , component : ProductComponent},
  {'path' : 'productDetails/:id' , component : ProductDetailsComponent},
  {'path' : 'updateProduct/:id' , component : AddProductComponent},
  {'path' : 'addProduct' , component : AddProductComponent},
  {path:"tasks",component:TasksComponent},
  {'path':"home",component:AppComponent},
  {'path' : 'login' , component : LoginComponent} ,
  {'path' : 'caddies' , component : CaddiesComponent} ,
 {'path' :''  ,redirectTo:'product/0/1',pathMatch:'full'}
  ]

// const appRoutes:Routes=[
//   {path:"login",component:LoginComponent},
//   {path:"tasks",component:TasksComponent},
//   {path:'',redirectTo:'/login',pathMatch:'full'}
//   ];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    ProductDetailsComponent,
    AddProductComponent,
    TasksComponent,
    CaddiesComponent
  ],
  imports: [
    BrowserModule , 
    FormsModule    ,
    ReactiveFormsModule ,
    HttpClientModule , 
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
