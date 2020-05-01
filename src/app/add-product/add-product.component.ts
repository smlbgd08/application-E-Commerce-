import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { CategoryService } from '../services/category.service';
import { Category } from '../model/Category';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private route : Router , private activeRoute : ActivatedRoute , 
    private productService : ProductService , private categorieService : CategoryService) { }

    addOrUpdate = false ;
    idProd  ; 
    private selectedFiles;
    private currentUploadFiles;
    currentProduct : Product = null ;

  selectedObject : Category;

  private categories ;
  ngOnInit() {
    this.idProd = this.activeRoute.snapshot.params.id

    if(this.idProd != undefined)
    {
      this.addOrUpdate=true;
      this.getOneProduct(this.idProd);
     
    }

    this.getCategorie();
    
  }


  selectCadyy(current : Product ){
    this.currentProduct = current ;
  }


  deleteProduct()
  {
    
    //alert("this is  // " + this.currentProduct.id)
    this.productService.deleteProduct("deleteProduct",this.currentProduct).subscribe(data => {
     
      this.route.navigate(["/"])

    }, err => {
      console.log("err")
    })

  }
  

  onSelectFile(event)
  {
    
    this.selectedFiles = event.target.files
  }

  onSubmit(formData)
  {
    console.log(formData)
    this.addProduct(formData)
  }

  private getCategorie()
{
  this.categorieService.getResource("getAllCategorie").subscribe(data=>{
  
   this.categories= data;
  }, err =>  {
   // alert('ko')
  })
}


  updateProduct()
  {
    
    //alert("this is  // " + this.currentProduct.id)
    this.productService.updateProduct("updateProduct",this.currentProduct).subscribe(data => {
     
      this.currentProduct = data;
      let idHqsh = btoa(this.currentProduct.id+"")
      this.route.navigate(["/productDetails/"+idHqsh])

    }, err => {
      console.log("err")
    })

  }

  addProduct(formData)
  {
    
    this.productService.addProduct("addProduct",formData).subscribe(data => {
     
      this.currentProduct = data;
      console.log(data)
      this.uploadPhoto(data.id);
      let idHqsh = btoa(this.currentProduct.id+"")
      this.route.navigate(["/productDetails/"+idHqsh])

    }, err => {
      console.log("err")
    })

  }


  uploadPhoto(id : number)
  {
   
    this.currentUploadFiles = this.selectedFiles.item(0);
    
    this.productService.uploadPhotoProduct(this.currentUploadFiles , id).subscribe(avent=>{
      
     
    } , err => {
      console.log(err);
    })

  }



  getOneProduct(id)
{
  //this.idProd = atob(id);
  this.productService.getProduct("getOneProduct/"+id).subscribe(data => {    
    this.currentProduct= data;
  } , err => {
    console.log("error");
  })

}

}
