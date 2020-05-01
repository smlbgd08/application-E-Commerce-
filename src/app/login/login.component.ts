import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthentificationService , 
    private router : Router) { }
    private mode=0;
  ngOnInit() {
    let token=this.authService.loadToken();
    if(token)
      this.router.navigateByUrl("/product/0/1");
  }

  onLogin(formData)
  {
    console.log(formData)
    this.authService.login(formData).subscribe(resp=>{
      let jwtToken=resp.headers.get('Authorization');
     
      this.authService.saveToken(jwtToken);
      if(this.authService.roles.length == 0 )
         this.authService.saveRole();
     this.router.navigateByUrl("/home");
      },
      err=>{
      this.mode=1;
      })
      

    // if(this.authService.isAuthenticated)
    // {
    //   this.authService.saveAuthentificationUser();
    //   this.router.navigate(['/product/0/1'])

    // }

  }



  onRegister(){
    this.router.navigateByUrl("/register");
    }

}
