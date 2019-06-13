import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as faker from 'faker';
import {Apartment} from '../../appartment_model/apartment';

export interface Apartment {
    image: string;
    price: string;
    area: string;
    localisation: string;
    description: string;
    supplier: string;
    numberOfPieces: string;
}
@Injectable({
    providedIn: 'root'
})
export class ApartmentService {
    // private apartmentsCollection: AngularFirestoreCollection<Apartment>;
    // private apartments: Observable<Apartment[]>;

    /*constructor(db: AngularFirestore) {
        /*this.apartmentsCollection = db.collection<Apartment>('apartments');
        this.apartments = this.apartmentsCollection.snapshotChanges().pipe(
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
            db.collection('apartments').add({
                image: faker.random.image(),
                price: faker.random.number(500).toString(),
                area: faker.random.number(300),
                localisation: faker.address.city(),
                description: faker.lorem.paragraph(5),
                supplier: faker.name.firstName(2)
            });
        }
    }

    getApartments() {
        return this.apartments;
    }

    getApartment(id) {
        return this.apartmentsCollection.doc<Apartment>(id).valueChanges();
    }

    updateApartment(apartment: Apartment, id: string) {
        return this.apartmentsCollection.doc<Apartment>(id).update(apartment);
    }

    addApartment(apartment: Apartment) {
        return this.apartmentsCollection.add(apartment);
    }

    removeApartment(id) {
        return this.apartmentsCollection.doc<Apartment>(id).delete();
    }*/
}
