import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products: any[] = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._httpService.getProducts()
      .subscribe((data: any) => {
        this.products = data.products;
      });
  }

  editProduct(productId: string) {
    this._router.navigate(['products/edit/' + productId]);
  }

  deleteProduct(productId: string) {
    this._httpService.deleteProduct(productId)
      .subscribe((data: any) => {

        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i]._id === productId) {
            return this.products.splice(i, 1);
          }
        }
      });
  }
}