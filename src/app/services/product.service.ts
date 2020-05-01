import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public host : string = "http://localhost:80/";
  private jwtToken:string;


  constructor(private http :HttpClient , private authservice : AuthentificationService) { }

  public getProduct(url):Observable<Product>
  {
   
    if(this.jwtToken==null) 
    this.jwtToken = this.authservice.loadToken();
   return this.http.get<Product>("http://localhost:80/"+url , {headers:new
    HttpHeaders({'authorization':this.authservice.loadToken()})});
  }


  public getHeaderToken()
{
  if(this.jwtToken==null) 
    this.jwtToken = this.authservice.loadToken();
   return  {headers:new
      HttpHeaders({'authorization':this.jwtToken})} ; 
}

  public updateProduct(url , product)
  {
    
    if(this.jwtToken==null) 
    this.jwtToken = this.authservice.loadToken();
   return this.http.put<Product>(this.host+url,product , {headers:new
    HttpHeaders({'authorization':this.jwtToken})});
  }

  public deleteProduct(url , product)
  {
  
    if(this.jwtToken==null) 
    this.jwtToken = this.authservice.loadToken();
   return this.http.delete<Product>(this.host+url+"/"+product.id , {headers:new
    HttpHeaders({'authorization':this.jwtToken})});
  }

  public addProduct(url , product)
  {
    
    if(this.jwtToken==null) 
    this.jwtToken = this.authservice.loadToken();
   return this.http.post<Product>(this.host+url,product , {headers:new
    HttpHeaders({'authorization':this.jwtToken})});
  }

  public getProductByCategorie(url)
  {
    if(this.jwtToken==null) 
    this.jwtToken = this.authservice.loadToken();
   return this.http.get(this.host+url , {headers:new
    HttpHeaders({'authorization':this.jwtToken})});
  }

  public uploadPhotoProduct(file : File , id : number) : Observable<HttpEvent<{}>>
  {
    if(this.jwtToken==null) 
    this.jwtToken = this.authservice.loadToken();
    let formData :FormData  = new FormData();
    formData.append('file' , file);
    
    const req = new HttpRequest('POST',this.host+'uploadPhoto/'+id ,formData , {
      reportProgress : true , 
      responseType : 'text' , 
      headers:new HttpHeaders({'authorization':this.jwtToken})
    }) 

    return this.http.request(req );

  }


}
