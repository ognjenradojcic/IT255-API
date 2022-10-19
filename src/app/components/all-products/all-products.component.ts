import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Product} from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: Product[];
  @HostBinding('class') classes = "mt-3 container";
  searchText: string;

  constructor(private router: Router, private dataService: DataService) {
    this.searchText = "";
  }


  ngOnInit(): void {
    this.dataService.getProducts().subscribe(data => this.products = data['products']);
    console.log(this.products);

  }


  seeDetails(id: number) {
    this.router.navigate(['/products/', id])
  }

}
