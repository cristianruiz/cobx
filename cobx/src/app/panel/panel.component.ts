import { Component, OnInit,ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import {Cuenta } from '../models/cuenta';
declare var $:any
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor() { }
   cuenta = {
    nro_fi :'',
    rut_num :'',
    historial:'',
    nombre_paciente:'',
    saldo:'',
    responsable:'',
    fecha_alta:'',
    contacto:'',
    estado:''
  } 
  someClickHandler(info: any): void {
     //cu = new Cuenta(info.nro_fi,info.rut_num,info.paciente);
    this.cuenta.nro_fi=info.nro_fi;
    this.cuenta.rut_num=info.rut_num;
    this.cuenta.historial=info.historial;
    this.cuenta.nombre_paciente=info.paciente;
    this.cuenta.saldo=info.saldototal;
    this.cuenta.responsable=info.responsa;
    this.cuenta.contacto=info.contacto;
    this.cuenta.estado=info.estado;


    console.log( this.cuenta.nro_fi + ' - ' + this.cuenta.historial);
    $("#modalBook").modal('show');
  }
  ngOnInit(): void {
    console.log("cargando grilla");
    this.dtOptions = {
      ajax: 'http://localhost:8080/data',
      columns: [/*{
        title: 'ID',
        data: 'id'
      }, */{
        title: 'FICHA',
        data: 'nro_fi'
      },
      {
        title: 'RUT PACIENTE',
        data: 'rut_num'
      }, 
      {
        title: 'NOMBRE',
        data: 'paciente'
      },
      {
        title: 'FECHA INGRESO',
        data: 'fec_ingreso'
      },
      {
        title: 'PREVISION',
        data: 'prevision'
      },
      {
        title: 'RESPONSABLE',
        data: 'responsa'
      }, 
      {
        title: 'CONTACTO',
        data: 'contacto'
      },
      {
        title: 'SALDO CUENTA',
        data: 'saldototal'
      } ,
        {
        title: 'HISTORIAL',
        data: 'historial',
        visible: false
      },
      {
        title: 'ESTADO',
        data: 'estado',
        visible: false
      },
    ],
    rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.someClickHandler(data);
        });
        return row;
      }
    };
  }
  rowclicked(){
    console.log("clicked");
  }
}
/*import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
class Person {
  id : number;
  nro_fi: number;
  responsa: string;
  saldototal: number;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
	dtOptions: DataTables.Settings = {};
  persons: Person[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            'http://localhost:8080/data',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp.data;
            console.log("CANT: "+resp.data);
            callback({

              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' },{ data: 'nro_fi' }, { data: 'responsa' }, { data: 'saldototal' }]
    };
  }
}
*/
