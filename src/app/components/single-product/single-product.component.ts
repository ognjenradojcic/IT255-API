import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  id: number;
  product: Product;
  loaded = false;
  constructor(private route: ActivatedRoute, private dataService: DataService) {
    route.params.subscribe(params => this.id = params['iso2']);
  }

  ngOnInit(): void {
    this.dataService.getProduct(this.id).subscribe(data => {
      this.loaded = true;
      this.product = data
      
    });



  }

}
