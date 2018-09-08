# ng-mensajero

Servicio para Angular 6+ que funciona como proveedor de mensajes para la comunicación entre componentes y servicios. Utiliza un BehaviorSubject con dos métodos públicos, uno para emitir mensajes y otro para suscribirse y escucharlos.

## Instalación

```shell
npm install ng-mensajero
```

## Uso en Angular

Para usar el servicio, hay que inyectarlo en un constructor:
```shell
...
import { NgMensajeroService } from 'mensajero';
...

constructor(private mensajeroService: NgMensajeroService) { }
```

Los mensajes son objetos JavaScript con dos propiedades de tipo cadena: tema y contenido. Si se quiere emitir un mensaje:

```shell
let mensaje = {
  tema: 'usuario',
  contenido: 'usuario-logueado'
};

this.mensajeroService.emite(mensaje);
```

Si se quieren escuchar los mensajes de un tema:

```shell
this.mensajeroService.escucha('usuario').subscribe(
  msj => {
    switch (msj.contenido) {
      case 'usuario-logueado':
        // ...
        break;
      // ...
    }
  }
)
```
