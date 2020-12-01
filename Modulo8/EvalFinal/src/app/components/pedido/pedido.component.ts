import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedidos: any;
  
  constructor(private pedidoService: PedidoService, private router: Router) { }

  ngOnInit(): void {
	  this.retrievePedidos();
  }

  retrievePedidos(): void {
		this.pedidoService.getPedidos().snapshotChanges().pipe(map(changes => 
        changes.map(c =>
         ({ key: c.payload.key, ...c.payload.val() })))).subscribe(data => {this.pedidos = data;});
  };
}





  
