import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  public productlist:any;

  constructor(private apis:ApiService) { }

  ngOnInit(): void {
     
    this.apis.getProduct()
    .subscribe(res=>{
    
     this.productlist=res;


  })
}
  }


