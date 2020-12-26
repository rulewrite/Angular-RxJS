import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  product$ = this.productService.selectedProduct$.pipe(
    catchError((error) => {
      this.errorMessageSubject.next(error);
      return EMPTY;
    })
  );

  pageTitle$ = this.product$.pipe(
    map((product) => {
      if (!product) {
        return null;
      }

      return `Product Detail for: ${product.productName}`;
    })
  );

  productSuppliers$ = this.productService.selectedProductSuppliersJustInTime$.pipe(
    catchError((error) => {
      this.errorMessageSubject.next(error);
      return EMPTY;
    })
  );

  constructor(private productService: ProductService) {}
}
