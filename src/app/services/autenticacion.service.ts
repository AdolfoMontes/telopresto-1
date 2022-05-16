import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { Respuesta } from '../interfaces/Respuesta';
import { map, withLatestFrom } from 'rxjs/operators';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http: HttpClient,  public alertController:AlertController, public navController: NavController) { }

<<<<<<< HEAD
  rutaBase: string = 'http://localhost:3001';
  public usuarioAuth : string;
  public claveAuth : string;

  validarLogin(usuario, contrasena) {
    return this.http.get<Usuario>(this.rutaBase + '/run=' + usuario + '&pass=' + contrasena)
=======
  rutaBase: string = 'http://localhost:3001/';
  public usuarioAuth : string;
  public claveAuth : string;
  
  

  validarLogin(usuario, contrasena) {
    return this.http.get<Usuario>(this.rutaBase + 'validarUsuario/run=' + usuario + '&pass=' + contrasena)
>>>>>>> 86854cb6d79db986db021a6b4c523155c3df19ed
      .pipe( map(auth => {
        if(auth !== undefined){
          console.log(usuario + contrasena);
          this.usuarioAuth=usuario;
          this.claveAuth=contrasena;
       }
      return auth;
     }));
    }
<<<<<<< HEAD
=======

  registrarUsuario( id_usuario, rut, dv, pri_nom, seg_nom, pri_ap, seg_ap,  direccion, id_comuna, mail, password, sexo, rol, estado){
     return this.http.post(this.rutaBase+ 'registrar',{id_usuario, rut, dv, pri_nom, seg_nom, pri_ap, seg_ap, direccion, id_comuna, mail, password, sexo, rol, estado});
  }  

>>>>>>> 86854cb6d79db986db021a6b4c523155c3df19ed
}
