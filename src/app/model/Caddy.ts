import { ProductItems } from './product-items';
import { client } from './client';

export class Caddy {
    public name : string ;
    public items : Map<number , ProductItems>  = new Map();
    
    public client : client;
    constructor(name : string){
        this.name = name ;
    }
}