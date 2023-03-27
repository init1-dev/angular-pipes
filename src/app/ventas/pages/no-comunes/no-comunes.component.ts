import { Component } from '@angular/core';
import { interval } from 'rxjs';

interface Persona {
  nombre: string;
  genero: string;
  edad: number;
  direccion: string;
}

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss']
})

export class NoComunesComponent {

  // i18nSelect
  persona: Persona = {
    nombre: 'Fernando',
    genero: 'masculino',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Juan', 'Clara', 'Marta', 'Iván'];
  clientesMapa = {
    '=0': 'No hay ningún clientes',
    '=1': 'Actualmente tenemos 1 cliente',
    'other': 'Actualmente tenemos # clientes'
  }

  cambiarCliente() {
    if(this.persona.nombre === 'Fernando'){
      this.persona.nombre = 'María';
      this.persona.genero = 'femenino';
    } else {
      this.persona.nombre = 'Fernando';
      this.persona.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  revertirClientes() {
    this.clientes = ['María', 'Pedro', 'Juan', 'Marcelo', 'Clara', 'Marta', 'Iván'];
  }

  // jsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(1000); //0,1,2,3,4,5,6...

  valorPromesa = new Promise( (resolve, reject) => {
    
    setTimeout(() => {
      resolve( '¡Promise data!' );
    }, 3500);

  })

}