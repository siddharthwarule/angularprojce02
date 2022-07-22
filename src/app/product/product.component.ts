import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productlist:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    
       this.api.getProduct()
       .subscribe(res=>{
       
        this.productlist=res;


       })



  }

}
