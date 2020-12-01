import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { map } from 'rxjs/operators';
import Pedido from 'src/app/models/pedido';


@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']  
})

export class PrincipalComponent implements OnInit {

  productos: any;
  mostrarCarrito = false;
  mostrarPrincipal = true;
  mostrarDetalle = false;
  pedido: Pedido = new Pedido();

  constructor(private productoService: ProductoService, private pedidoService: PedidoService) { }

  ngOnInit(): void {
	this.retrieveProductos();
  }
  
  public id_producto : string;
  onChange(UpdatedValue : string) :void
  {
    console.log (UpdatedValue);
	this.id_producto = UpdatedValue;
	
  }

  retrieveProductos(): void {
		this.productoService.getProductos().snapshotChanges().pipe(map(changes => 
        changes.map(c =>
         ({ key: c.payload.key, ...c.payload.val() })))).subscribe(data => {this.productos = data;});
  };
  
  carritoClicked(){
	  this.mostrarCarrito = true;
	  this.mostrarPrincipal = false;
  }
  
  principalClicked(){
	  this.mostrarCarrito = false;
	  this.mostrarPrincipal = true;
  }

  AnadirPedido(): void {
    this.pedidoService.create(this.pedido).then(() => {
      alert('Pedido creado exitosamente!');
    });
  }
  
  detalleClicked(){
	  this.mostrarDetalle = true;
	  this.mostrarPrincipal = false;
  }
  
  cierraDetalleClicked(){
	  this.mostrarDetalle = false;
	  this.mostrarPrincipal = true;
  }

}

