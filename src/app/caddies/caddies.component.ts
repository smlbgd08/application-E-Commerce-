import { Component, OnInit } from '@angular/core';
import { CaddyService } from '../services/caddy.service';
import { Caddy } from '../model/Caddy';
import { ProductItems } from '../model/product-items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caddies',
  templateUrl: './caddies.component.html',
  styleUrls: ['./caddies.component.css']
})
export class CaddiesComponent implements OnInit {
 private caddyDelete : ProductItems = null;
  constructor( public caddyService : CaddyService , private route : Router) { }

  ngOnInit() {
  }

  selectCadyy(caddy : ProductItems ){
  this.caddyDelete = caddy ;
}

  deleteCaddy(){
    if(this.caddyDelete != null){
      this.caddyService.deleteCaddy(this.caddyDelete);
      this.route.navigate(['/']);
    }
    
  }

}
