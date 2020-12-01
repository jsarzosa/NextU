import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Pedido from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private dbPath = '/pedido';
  
  pedidosRef: AngularFireList<Pedido> = null;

  constructor(private db: AngularFireDatabase) {
    this.pedidosRef = db.list(this.dbPath)
  }

  getPedidos(): AngularFireList<Pedido> {
	console.log (this.pedidosRef);
    return this.pedidosRef;
  }
  
  create(pedido: Pedido): any {
	const data = {
    id_producto: '3',
	cantidad: '10',
	nombre_producto: 'manzana',
	total: '11',
	imagen: './assets/img/manzana.jpg'
	};

// Add a new document in collection "cities" with ID 'LA'
 return this.pedidosRef.push(data);

	//return this.pedidosRef.push(pedido);
  }
}
