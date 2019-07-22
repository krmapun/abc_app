import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotiI } from '../models/noti.interface';

@Injectable({
  providedIn: 'root'
})
export class NotiService {

  private notiCollection: AngularFirestoreCollection<NotiI>;
  private notis: Observable<NotiI[]>;

  constructor(db: AngularFirestore) { 
    this.notiCollection = db.collection<NotiI>('noticias');
    this.notis = this.notiCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      }));
  }

  getNotis(){
    return this.notis;
  }

  getNoti(id: string){
    return this.notiCollection.doc<NotiI>(id).valueChanges();
  }

  updateNoti(notis: NotiI, id: string ) {
    return this.notiCollection.doc(id).update(notis);
  }

  addNoti(notis: NotiI ){
    return this.notiCollection.add(notis);
  }

  removeNoti(id: string){
    return this.notiCollection.doc(id).delete();
  }

}
