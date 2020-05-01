import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Routes, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpEventType, HttpHeaders } from '@angular/common/http';
import { AuthentificationService } from '../services/authentification.service';
import { Product } from '../model/product';
import { CaddyService } from '../services/caddy.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private jwtToken:string;
  constructor(private productservice : ProductService , private caddyService :  CaddyService, private router : Router ,
      private activeRoute :ActivatedRoute , 
      private  authService : AuthentificationService) { 

  

  }
  private products ;
  private editPhoto : boolean;
  private currentPhotoEdit;
  private selectedFiles;
  private progress ;
  private currentUploadFiles ;
  private titrePage ;
  // pour actualiser whene update photo
  private timeStamp = 0;
  ngOnInit() {

    if(this.authService.isadmin != 'ADMIN' )
    this.authService.isAdmin();

   
          let ctg =  this.activeRoute.snapshot.params.p2;
          let  AllOrCategorie =  this.activeRoute.snapshot.params.p1;
       

          if(AllOrCategorie==0)
          {
            this.titrePage ="Tout les produit "
            this.getAllProduct("getAllProduct");
          } 
    
          // evenement de navbar 
    this.router.events.subscribe(val => {
      if(val instanceof NavigationEnd)
      {
        let ctg =  this.activeRoute.snapshot.params.p2;
        let  AllOrCategorie =  this.activeRoute.snapshot.params.p1;
     
       
   
        if(this.authService.roles.length == 0 )
         this.authService.saveRole();
        
         

          
            
          if(AllOrCategorie==0)
          {
            
            this.titrePage ="Tout les produit "
            this.getAllProduct("getAllProduct");
          }   
           if(AllOrCategorie==1)
          {

            this.titrePage ="Produit de la categorie  " + ctg;

            this.getProductByCat(ctg);
          }
           if(AllOrCategorie==2)
          {

            this.titrePage ="Produit avec Promotion  " ;

            this.getAllProduct("getProductPromotion");
          }
           if(AllOrCategorie==3)
          {

            this.titrePage ="Produit Disponible  " ;

            this.getAllProduct("getProductDisponible");
          }
           if(AllOrCategorie==4)
          { 

            this.titrePage ="Recherche Produit  " ;
            //this.getAllProduct("getProductDisponible");
          }
      }
    })
   // let AllOrCategorie =  this.activeRoute.snapshot.params.p1;

    // if(AllOrCategorie==0)
    //       {
         
    //         this.getAllProduct("getAllProduct");
    //       }
 
  }
  onSelectFile(event)
  {
    
    this.selectedFiles = event.target.files
  }

  uploadPhoto()
  {
    this.progress = 0 ;
    this.currentUploadFiles = this.selectedFiles.item(0);
    
    this.productservice.uploadPhotoProduct(this.currentUploadFiles , this.currentPhotoEdit).subscribe(avent=>{
      //alert('télechargement avec success ...')
      this.editPhoto = false;
     this.timeStamp = Date.now();
     console.log(this.timeStamp)
    } , err => {
      console.log(err);
    })

  }

  addTocardCaddy(product : Product , quantite : number)
  {
    this.caddyService.addTocardCaddy(product , quantite );
  
  }

  loadCaddy()
  {
    this.caddyService.loadCaddy();
  }

  isEditPhoto(id)
  {
    
   this.currentPhotoEdit = id ; 
    this.editPhoto = true;
  }


  private getProductByCat(id:number)
{
  this.getAllProduct("getProductByCategories/"+id);

}



  getAllProduct(url)
  {
    
    this.productservice.getProduct(url).subscribe(data=>{
      console.log(data);
  this.products = data;
    },err => {
      console.log(err)
    });
  }

  // public isAdmin()
  // {
  //   this.authService.isAdmin()
  // }

  showDetailProduct(id)
  {
    let idHqsh = btoa(id)
  this.router.navigate(["/productDetails/"+idHqsh])
   // alert(id)
  }

}
