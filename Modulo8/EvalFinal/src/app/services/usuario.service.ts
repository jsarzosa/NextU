import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Usuario from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuariosRef: AngularFireList<Usuario> = null;

  constructor(private db: AngularFireDatabase) {
    this.usuariosRef = db.list('/usuarios')
  }

  getUsuario(): AngularFireList<Usuario> {
    return this.usuariosRef;
  }
  
  
}
