import { Category } from './Category';

export interface Product {

      id : number ;
	  name : String ; 
	  description : String ;
	  currentprice : number ;
	  promotion : boolean ;
	  selected : boolean ;
	  availabe : boolean ;
	  photoName : String ;
	quantite : number ;
	category : Category

	  
}


