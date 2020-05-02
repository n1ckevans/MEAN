import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productToEdit = null;
  errorMsg: string = '';

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this._activeRoute.params
      .subscribe((params: Params) => {

        this._httpService.getProduct(params.id)
          .subscribe((data: any) => {

            this.productToEdit = data.product;
          });
      });
  }

  handleSubmit() {
    this._httpService.updateProduct(this.productToEdit._id, this.productToEdit)
      .subscribe((data: any) => {

        if (data.hasOwnProperty('errors')) {
          console.log(data.errors);

          this.errorMsg = data.errors.message;
        }
        else {
          this._router.navigate(['/']);
        }
      });
  }

  handleCancel() {
    this._router.navigate(['/']);
  }

}