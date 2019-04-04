import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Student } from '../Student/student';
import { Subjectdegrees } from './subjectdegrees';

@Injectable({
  providedIn: 'root'
})
export class SubjectdegreesService {

  url:string = "http://localhost:57833/api/StudentSubjects/";
  
 
  updateDegrees( Subjectdegrees:Subjectdegrees[]){
    console.log("Services updateDegrees")
    return this.http.put(this.url,Subjectdegrees);

  }
  

  constructor(private http: HttpClient) { }
 
  getAll(){
    return this.http.get<Subjectdegrees[]>(this.url);
   }// Get All Subject
  addSubjectdegrees(Subjectdegrees:Subjectdegrees[]){

    console.log("Assign Subject Service", Subjectdegrees)

    return this.http.post<Subjectdegrees>(this.url, Subjectdegrees);
  }
  addSubject(Subjectdegrees:Subjectdegrees){
    console.log("Add Subject Service", Subjectdegrees)

    return this.http.post<Subjectdegrees>(this.url, Subjectdegrees);
  }
}
