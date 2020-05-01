import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { ProductItems } from '../model/product-items';
import { Caddy } from '../model/Caddy';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CaddyService {
  currentCaddyName : string = "caddy1"
  public caddies : Map<string , Caddy>  = new Map();
 public productItems : ProductItems ;
 public listCaddies:Array<{num:number,items:ProductItems}> = [];

  constructor( private authService : AuthentificationService) { 
    // let caddy = new Caddy(this.currentCaddyName);
    // this.caddies.set(this.currentCaddyName ,caddy );

    // this.listCaddies.push({num : 1 , items : this.productItems}); 

  }

public addTocardCaddy(product : Product , quantite : number)
{
 
   let caddy = this.caddies.get(this.currentCaddyName); 
   // get current cqddy in localstorage
   let  listOfcaddy = JSON.parse(localStorage.getItem("caddyUser"));
   let cqddyInList : boolean = false ;
  
   // if any caddy in local storage add 
   if(listOfcaddy == null){
    listOfcaddy = [];
    this.productItems = new ProductItems(product , product.quantite , product.currentprice);  
    listOfcaddy.push({num : product.id , items : this.productItems}); 
       }
   else{
     
     for(let caddy of listOfcaddy )
     {
       // if hass this is caddy in list of caddy change quantity and remove it and add new caddy with new quantty
     let index = listOfcaddy.indexOf(caddy);
      if(caddy.num == product.id)
       {
        caddy.items.product.quantity = caddy.items.product.quantity + quantite ; 
        console.log(caddy)
       this.productItems =  new ProductItems(product , product.quantite , product.currentprice);
      listOfcaddy.push(caddy);
      listOfcaddy.splice(index, 1)
       cqddyInList = true ; 
      break ;
      }
     }
// if not has add simple caddy
     if(!cqddyInList)
      {
        this.productItems = new ProductItems(product , product.quantite , product.currentprice);  
        listOfcaddy.push({num : product.id , items : this.productItems}); 
        
      }
     
   }

   localStorage.setItem("caddyUser" , JSON.stringify(listOfcaddy));
}
public getTotal():number{
let total = 0 ; 
  let  listOfcaddy = JSON.parse(localStorage.getItem("caddyUser"));
  if(listOfcaddy != null){
    for(let caddy of listOfcaddy )
    {
      
      total += caddy.items.product.currentprice * caddy.items.product.quantity;
    }
  }

     return total;
}

deleteCaddy(caddy : ProductItems)
{
  console.log(caddy)
  let  listOfcaddy = JSON.parse(localStorage.getItem("caddyUser"));
  if(listOfcaddy != null){
    for(let cdy of listOfcaddy )
    {
      if(cdy.num == caddy.product.id)
      {
        let index = listOfcaddy.indexOf(cdy);
        listOfcaddy.splice(index, 1)
      }
    }
  }
  localStorage.setItem("caddyUser" , JSON.stringify(listOfcaddy));
}



getCurrentCaddy(){
return   JSON.parse(localStorage.getItem("caddyUser"));
  //this.caddies.get(this.currentCaddyName).items.values)
}

public loadCaddy()
{
 let  map = JSON.parse(localStorage.getItem("caddyUser"));
 console.log(map);
}





getTotalCurrentCaddy() {
  let caddy=this.caddies[this.currentCaddyName];
  let total=0;
  for(let key in caddy.items ){
    total+=caddy.items[key].price*caddy.items[key].quantity;
  }
  return total;
}

  
}
