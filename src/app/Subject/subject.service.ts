import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  url:string = "http://localhost:57833/api/Subjects/";
  
  getAll(){
   return this.http.get<Subject[]>(this.url);
  }// Get All Subject

  getById(id: number){
    console.log("Click Details", id);

    return this.http.get<Subject>(this.url+id);
  }
  addSubject(subject:Subject){
    console.log("Add Subject Service", subject)

    return this.http.post<Subject>(this.url, subject);
  }
  updateSubject( subject:Subject){
    return this.http.put(this.url+ subject.Id,subject);

  }
  deleteSubject(id: number){
    return this.http.delete(this.url+ id);
  }

  constructor(private http: HttpClient) { }
}
