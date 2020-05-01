import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
private user = [
  {"username" : "admin" , "password" : "1234" , roles : ["admin" , "user"] },
  {"username" : "user1" , "password" : "1234" , roles : [ "user"] },

  {"username" : "user2" , "password" : "1234" , roles : [ "user"] }

]
public isAuthenticated : boolean;
public userAuthenticated ;
private token;
private host:string="http://localhost:80";
private jwtToken:string;
public isadmin : string ="";
public roles:Array<any>=[];

public authenticatedUser;





  constructor(private http : HttpClient) { }

  login(user){
    return this.http.post(this.host+"/login",user,{ observe: 'response'
    });
    }

    register(user){
      return this.http.post(this.host+"/users",user);
      }

      saveToken(jwtToken){
        
      this.jwtToken=jwtToken;
      localStorage.setItem("token",jwtToken);
      let jwtHelper=new JwtHelper();
      this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
      
     
      }
      saveRole()
      {
        localStorage.getItem("token");
        let jwtHelper=new JwtHelper();
        this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
        this.isAdmin()

      }
      


      getTasks(){
        if(this.jwtToken==null) this.loadToken();
      
        return this.http.get("http://localhost:80/tasks",{headers:new
        HttpHeaders({'authorization':this.jwtToken})});
        }
        saveTask(task){
        let headers=new HttpHeaders();
        headers.append('authorization'
        ,this.jwtToken);
        return this.http.post(this.host+"/tasks",task,{headers});
        }

        loadToken(){
         
          this.jwtToken=localStorage.getItem('token');
          return this.jwtToken;
          }

          logout(){
            localStorage.removeItem('token');
            this.roles = [] ;
            }

            isAdmin(){
             
              for(let r of this.roles){

              if(r=='ADMIN') 
              {
               
                this.isadmin =  'ADMIN';
                break;
              }
  
              this.isadmin = 'USER';
              break;
               }
               
              }
              
        

































      /************************************** */
    

  public login1(username : String , password : String)
  {
    
    var user = { "username" : username ,   "password" : password }
    
    var url = this.host+"getall";
    console.log(url);
   this.http.get(url).subscribe(data => {
    
   });

    // let users ;
    // this.user.forEach(c =>{
    //   if(c.username === username && c.password===password)
    //   {
    //     users = c;
    //     this.token = {username : users.username , password : users.password , roles : users.roles };

    //   }
    // });
    //   if(users)
    //   {
        
    //      this.isAuthenticated = true;
    //      this.userAuthenticated = users;
         
    //    }
    //    else{
        
    //      this.isAuthenticated = false;
    //      this.userAuthenticated = undefined;
    //    }
  }

  isAdmin1()
  {
    if(this.isAuthenticated)
    {
      if(this.userAuthenticated.roles.indexOf('admin') > -1)
      {
        return true;
      }
    }
    return false;
  }

public saveAuthentificationUser()
{
  if(this.isAuthenticated)
  {
    localStorage.setItem("authToken", btoa(JSON.stringify(this.token)));
  }
}


logOut()
{
  this.isAuthenticated=false;
  this.userAuthenticated=undefined;
  localStorage.removeItem('authToken');
  
}

public loadAuthenticatedFromLoad()
{
 let token =  localStorage.getItem("authToken");
 if(token)
 {
  let user = JSON.parse(atob(token));
  
  this.isAuthenticated=true;
 this.userAuthenticated = user;
 }
 else{

  this.isAuthenticated=false;
  this.userAuthenticated = undefined;

 }

}


}
