import { Product } from './product';

export class ProductItems {
public product : Product ;
public quantite : number ;
public price : number ;


constructor(product : Product , quantite : number ,price : number ){
    this.price = price ; 
    this.product = product ; 
    this.quantite = quantite;
}


}