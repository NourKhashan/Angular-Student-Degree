import { Component, OnInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { Subject } from '../subject';
import { Student } from 'src/app/Student/student';
import { SubjectService } from '../subject.service';
import { SubjectdegreesService } from '../subjectdegrees.service';
import { Subjectdegrees } from '../subjectdegrees';
import { StudentService } from './../../Student/student.service';

@Component({
  selector: 'app-subjectdegrees',
  templateUrl: './subjectdegrees.component.html',
  styleUrls: ['./subjectdegrees.component.css']
})
export class SubjectdegreesComponent implements OnInit {

  constructor(private SubjectSerivce: SubjectService, 
    private StudentService:StudentService,
     private SubjectdegreesService:SubjectdegreesService) { }
  Subject:Subject=new Subject();
  SubjectId:number;
  Subjects:Subject[]=[];
  Subjectdegrees:Subjectdegrees[] = [];
  Students:Student[]=[];
  AllStudents:Student[]=[];
  degrees:number[] =[];
  IndexStuden:number[] = [];
  ngOnInit() {
    this.SubjectSerivce.getAll().subscribe(
      (subjs)=>{
        console.log(subjs)
        this.Subjects=subjs;
        
      }
      );


      this.StudentService.getAll().subscribe(
        (stud)=>{
          console.log(stud)
          this.AllStudents=stud;
          
        }
        );
  }

  getStudents(){
    console.log("Get Students", this.SubjectId);
    this.SubjectdegreesService.getAll().subscribe(
      (studentsSubjects)=>{
        console.log("StudentSubject", studentsSubjects);
        this.Students=[];

        studentsSubjects.forEach((studentSubj)=>{
          if(studentSubj.SubId == this.SubjectId){
            this.degrees.push(studentSubj.Degree);
            this.Students.push(this.AllStudents.find(b=>b.Id == studentSubj.StdId));
          }
        });//For each
      }


    );//GetAll
  }
  UpdateDegrees(){
    console.log("Button Click",this.degrees);
    this.Subjectdegrees =[];
    this.Students.forEach((element, index) => {
       this.Subjectdegrees.push(new Subjectdegrees(element.Id, this.SubjectId, this.degrees[index]));
    });
    console.log(this.Subjectdegrees)
    this.SubjectdegreesService.updateDegrees(this.Subjectdegrees).subscribe(
      (a)=>{
        console.log("Update",a)
      }
          )};
}
