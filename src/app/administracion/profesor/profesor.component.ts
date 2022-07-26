import { AgregarEditarProfesorComponent } from './agregar-editar-profesor/agregar-editar-profesor.component';
import { MatDialog } from '@angular/material/dialog';
import { ProfesorRequest } from './../../_model/profesorRequest';
import { ProfesorService } from './../../_services/profesor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.sass']
})
export class ProfesorComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private profesorService:ProfesorService
    ) { }

  ngOnInit(): void {
  }

  openModal(materia?: ProfesorRequest) {
    let profe = materia != null ? materia : new ProfesorRequest();
    const modalRef = this.dialog.open(AgregarEditarProfesorComponent, {
      width: '600px',
      data: profe,
    });
    modalRef.afterClosed().subscribe(result=>{
      // if (result.estatus) {
      //   this.consultarTodos();
      // }
    })
  }

}
