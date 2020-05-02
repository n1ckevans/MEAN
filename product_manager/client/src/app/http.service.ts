import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    // tslint:disable-next-line: variable-name
    private _http: HttpClient
  ) { }


  getProducts() {
    // longform
    const observable = this._http.get('/api/products');
    return observable;
  }

  getProduct(id) {
    return this._http.get('/api/products/' + id);
  }

  createProduct(newProduct) {
    return this._http.post('/api/products', newProduct);
  }

  updateProduct(id, editedProduct) {
    return this._http.put('/api/products/' + id, editedProduct);
  }

  deleteProduct(id) {
    return this._http.delete('/api/products/' + id);
  }
}
