import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { SharedModule } from "./../shared/shared.module";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from "@angular/material/table";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AdministracionRoutingModule } from './administacion-routing.module';

import { AlumnoModule } from "./alumno/alumno.module";
import { AlumnosModule } from "./alumnos/alumnos.module";
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { AgregarEditarProfesorComponent } from './profesor/agregar-editar-profesor/agregar-editar-profesor.component';


@NgModule({
  declarations: [
  

  
    ProfesorComponent,
             AgregarEditarProfesorComponent
  ],
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    SharedModule,
    AdministracionRoutingModule,
    AlumnoModule,
    AlumnosModule,
    ComponentsModule,
    NgxDatatableModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
    
  ],
})
export class AdministracionModule {}
