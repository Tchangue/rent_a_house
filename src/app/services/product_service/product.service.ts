import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as faker from 'faker';
// import {Product} from '../../models/product_model/product';
// import {Apartment} from '../../models/product_model/appartment_model/apartment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
    /*private productsCollection: AngularFirestoreCollection<Product>;
    private products: Observable<Product[]>;
  constructor(db: AngularFirestore) {
      this.productsCollection = db.collection<Product>('products');
      this.products = this.productsCollection.snapshotChanges().pipe(
          map(actions => {
              return actions.map(a => {
                  const data = a.payload.doc.data();
                  const id = a.payload.doc.id;
                  return {id, ...data};
              });
          })
      );
      faker.setLocale('fr');
      for (let i = 0; i < 10; i++) {
          db.collection('products').add({
              type: null,
              price: faker.random.number(500),
              area: faker.random.number(300),
              localisation: faker.address.city(),
              description: 'Mon premier produit',
              supplier: faker.name.firstName(2)
          });
      }
  }

    getProducts() {
        return this.products;
    }

    getProduct(id) {
        return this.productsCollection.doc<Product>(id).valueChanges();
    }

    updateProduct(product: Product, id: string) {
        return this.productsCollection.doc<Product>(id).update(product);
    }

    addProduct(product: Product) {
        return this.productsCollection.add(product);
    }

    removeProduct(id) {
        return this.productsCollection.doc<Product>(id).delete();
    } */
}
