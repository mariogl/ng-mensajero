import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; // Tenemos que importar los observables de la librería RxJS
import { filter } from 'rxjs/operators'; // Tenemos que importar el operador filter de la librería RxJS

// Interfaz para la forma del objeto mensaje
export interface Mensaje {
  tema: string;
  contenido: string;
}

@Injectable({
  providedIn: 'root' // Así se establece a partir de Angular 6 el ámbito de la instancia del servicio
})
export class NgMensajesService {
  private mensajero: BehaviorSubject<Mensaje> = new BehaviorSubject({
    tema: '',
    contenido: ''
  });

  constructor() { }

  // Método público para quien se quiera suscribir a los mensajes
  public escucha(tema: string): Observable<Mensaje> {
    return this.mensajero.asObservable().pipe(
      filter(msj => msj.tema === tema)
    );
  }

  // Método público para quien quiera emitir un mensaje
  public emite(msj: Mensaje): void {
    setTimeout(() => this.mensajero.next(msj));  // setTimeout para que se ejecute después del ciclo de detección de cambios
  }
}
