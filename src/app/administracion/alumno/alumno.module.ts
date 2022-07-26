import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTableExporterModule } from "mat-table-exporter";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { SharedModule } from "src/app/shared/shared.module";
import { AlumnoService } from "src/app/_services/alumno.service";
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { FormularioMensajeComponent } from './todo-alumno/mensaje/formulario-mensaje/formulario-mensaje.component';
import { TodoAlumnoComponent } from "./todo-alumno/todo-alumno.component";
import { EliminarComponent } from "./todo-alumno/mensaje/eliminar-alumno/eliminar-alumno.component";
import { PerfilAluComponent } from './perfil-alu/perfil-alu.component';
import { Routes } from "@angular/router";
import { VistaProfeComponent } from './vista-profe/vista-profe.component';
import { PerfilAluProfesorComponent } from './perfil-alu-profesor/perfil-alu-profesor.component';
import { EditarCalificacionesComponent } from './perfil-alu-profesor/editar-calificaciones/editar-calificaciones.component';

const routes:Routes = [
    {
        path: "alumnoPerfil/:pk_alumno",
        component: TodoAlumnoComponent
    },
]

@NgModule({
    declarations:[
        //Componentes
        
        TodoAlumnoComponent,
        AgregarAlumnoComponent,
        EditarAlumnoComponent,
        EliminarComponent,
        FormularioMensajeComponent,
        PerfilAluComponent,
        VistaProfeComponent,
        PerfilAluProfesorComponent,
        EditarCalificacionesComponent,
          
        
        
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatDialogModule,
        MatSortModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatTooltipModule,
        MatTableExporterModule,
        ComponentsModule,
        SharedModule,
    ],
    providers:[AlumnoService]
})

export class AlumnoModule{}