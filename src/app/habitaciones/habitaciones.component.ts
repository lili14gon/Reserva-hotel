import { Component, OnInit } from '@angular/core';
import { Habitaciones } from '../habitaciones';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {
  habitacion: Habitaciones[];
  soloDisponible:Habitaciones[];
  soloReservado:Habitaciones[];
  soloPendiente:Habitaciones[];
  estado:number

  constructor(){ }
  ngOnInit(): void {
    this.estado=4;
    this.habitacion=[
    {
    "nombre":"habitacion 101",
    "estado":"disponible"
    },
    {
    "nombre":"habitacion 102",
    "estado":"reservado"
    },
    {"nombre":"habitacion 103",
    "estado":"disponible"
    },
    {"nombre":"habitacion 105",
    "estado":"reservado"
    },
    {"nombre":"habitacion 106",
    "estado":"pendiente"
    },
    {"nombre":"habitacion 107",
    "estado":"disponible"
    }
  ]
  }

  disponible(){
    this.estado=1;
    console.log("se disparo");
    this.soloDisponible= this.habitacion.filter(element=>element.estado =='disponible')
    
  }
  reservado(){
    this.estado=2;
    this.soloReservado= this.habitacion.filter(element=>element.estado =='reservado')
    
  }
  pendiente(){
    this.estado=3;
    this.soloPendiente= this.habitacion.filter(element=>element.estado =='pendiente')
    
    
  }
}
