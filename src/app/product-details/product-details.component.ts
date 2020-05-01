import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route : Router , private activeRoute : ActivatedRoute , 
    private productService : ProductService) { }

  idProd  ; 
  currentProduct :Product ;
  ngOnInit() {
    
    this.idProd = this.activeRoute.snapshot.params.id
    //alert(this.activeRoute.snapshot.params.id)
    this.getOneProduct(this.idProd);
  }

  

getOneProduct(id)
{
  this.idProd = atob(id);
  this.productService.getProduct("getOneProduct/"+this.idProd).subscribe(data => {
    console.log(data);
    
    this.currentProduct= data;
    
  } , err => {
    console.log("error");
  })

}

updateProduct(id)
{
 
  this.route.navigate(["/updateProduct/"+id])
}




}
