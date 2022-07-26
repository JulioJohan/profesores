import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { ProfesorService } from './../../../_services/profesor.service';
import { ProfesorRequest } from './../../../_model/profesorRequest';
import { Component, Inject, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-editar-profesor',
  templateUrl: './agregar-editar-profesor.component.html',
  styleUrls: ['./agregar-editar-profesor.component.sass']
})
export class AgregarEditarProfesorComponent implements OnInit {

  profesor!: ProfesorRequest;
  formProfesor: FormGroup;
  isClicked: boolean;

  constructor(
    private profesorService:ProfesorService,
    private dialogRef: MatDialogRef<AgregarEditarProfesorComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data:ProfesorRequest,
  ) { }

  ngOnInit(): void {
    this.profesor= new ProfesorRequest();
    this.profesor=this.data
    this.cargarFormulario();
  }

  cargarFormulario(){
    this.formProfesor=this.formBuilder.group({
      pk_profesor:(this.data.pk_profesor),
      txt_clave:(this.data.txt_clave),
      txt_nombre:(this.data.txt_nombre),
      txt_ape_paterno:(this.data.txt_ape_paterno),
      txt_ape_materno:(this.data.txt_ape_paterno),
      txt_correo:(this.data.txt_ape_paterno)
    })
  }

  aceptar(){
    console.log(this.formProfesor.value);
    if(this.formProfesor.value.profesor!=null && this.formProfesor.value.profesor.pk_profesor! >0){
      this.profesorService.editar(this.formProfesor.value).subscribe(data=>{
          console.log(data); 
          Swal.fire({
            icon: 'success',
            title: "Editado con exito",
            showConfirmButton: false,
            timer: 2500
          })
          this.dialogRef.close({estatus:true,data:data.data});
      })
    }else{
      this.profesorService.agregar(this.formProfesor.value).subscribe(data=> {
        console.log(data);
          Swal.fire({
            icon: 'success',
            title: "Agregado con exito",
            showConfirmButton: false,
            timer: 2500
          });
          this.dialogRef.close({estatus:true,data:data.data});
      })
    }
    this.isClicked = true;
  }

  cerrar(){
    this.dialogRef.close(false);
  }
}
