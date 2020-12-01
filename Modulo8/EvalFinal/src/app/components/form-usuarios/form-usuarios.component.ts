import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})

export class FormUsuariosComponent {
  usuarios: any;
	
  constructor(private usuarioService: UsuarioService, private router: Router) { }
  
  ngOnInit(): void {
	this.retrieveUsuarios();
  }
  
  retrieveUsuarios(): void {
		this.usuarioService.getUsuario().snapshotChanges().pipe(map(changes => 
        changes.map(c =>
         ({ key: c.payload.key, ...c.payload.val() })))).subscribe(data => {this.usuarios = data;});
  };
}

