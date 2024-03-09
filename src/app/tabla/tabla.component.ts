import { Component, Input } from '@angular/core';
import { Habitaciones } from '../habitaciones';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
@Input () valor:any;
@Input() habitaciones:Habitaciones[];

constructor(){ }

registrar(){
  
}

}
