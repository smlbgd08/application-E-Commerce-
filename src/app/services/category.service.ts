import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public host : string = "http://localhost:80/";
  private jwtToken:string;

  constructor(private http :HttpClient , private authservice : AuthentificationService) { }

public getResource(url)
{

  if(this.jwtToken==null) 
  this.jwtToken = this.authservice.loadToken();
  return this.http.get(this.host+url , {headers:new
    HttpHeaders({'authorization':this.jwtToken})});

 
}

}
