import { Profesor } from './../_model/profesor';
import { Response } from './../_model/response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpRequest,  HttpEvent, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { UnsubscribeOnDestroyAdapter } from '../shared/UnsubscribeOnDestroyAdapter';
import { ProfesorRequest } from '../_model/profesorRequest';

const url= "http://localhost:8081/profesor";

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http:HttpClient) { }
 
  agregar(profesor: ProfesorRequest): Observable<Response<Profesor>>{
    return this.http.post<Response<Profesor>>(url+"/guardarProfesor", profesor);
  }

  editar(profesor: ProfesorRequest): Observable<Response<Profesor>>{
    return this.http.put<Response<Profesor>>(url+"/actualizarProfesor", profesor);
  }

  
}
