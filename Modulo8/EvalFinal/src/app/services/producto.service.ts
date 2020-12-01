import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Producto from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productosRef: AngularFireList<Producto> = null;

  constructor(private db: AngularFireDatabase) {
    this.productosRef = db.list('/productos')
  }

  getProductos(): AngularFireList<Producto> {
    return this.productosRef;
  }
}
