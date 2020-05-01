import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';
import { Router } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';
import { CaddyService } from './services/caddy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private categories ;
  private currentCategorie;

  constructor(private categoryservice : CategoryService ,
     private route:Router , 
     public caddyService : CaddyService ,
     private authService : AuthentificationService)
  {}

ngOnInit(): void {
  
 
 this.getCategorie();
 this.authService.loadAuthenticatedFromLoad();
 if(!this.authService.isAuthenticated)
 {
   this.route.navigate(['/login']);
 }
 if(this.authService.roles.length == 0 )
 this.authService.saveRole();

}

private deconn()
{

  this.authService.logout();
  this.authService.isAuthenticated=false;
  this.route.navigate(['/login'])
}
private getProductByCat(id:number)
{
 this.currentCategorie=id;
  this.route.navigate(['/product/1/'+id])
}
onSelectProduct()
{
 
  this.currentCategorie=undefined;
  this.route.navigate(['/product/0/1'])
}


onSelectPromotion()
{
 
  this.currentCategorie=undefined;
  this.route.navigate(['/product/2/1'])
}

onSelectDisponible()
{
 
  this.currentCategorie=undefined;
  this.route.navigate(['/product/3/1'])
}
onSelectRecherche()
{
  this.currentCategorie=undefined;
  this.route.navigate(['/product/4/1'])
}


private getCategorie()
{
  this.categoryservice.getResource("getAllCategorie").subscribe(data=>{
   
   this.categories= data;
  }, err =>  {
    this.route.navigate(['/login'])
  })
}









}
