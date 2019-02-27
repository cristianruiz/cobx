import { Component, OnInit ,Input} from '@angular/core';
import {Cuenta } from '../models/cuenta';
@Component({
  selector: 'app-cargadatos',
  templateUrl: './cargadatos.component.html',
  styleUrls: ['./cargadatos.component.css']
})
export class CargadatosComponent implements OnInit {
 @Input() public nro_fi:String;
 @Input() public historial:String;
 @Input() public estado:String;
 @Input() public paciente:String;
 @Input() public saldo:number;
 @Input() public responsable:String;
 @Input() public contacto:String;
  constructor() { }

  ngOnInit() {
  }

}
