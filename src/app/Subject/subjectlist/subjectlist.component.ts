import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject';

@Component({ 
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.css']
})
export class SubjectlistComponent implements OnInit {
  
  subjectlist:Subject[]=[];
  nstd:Subject=new Subject(0,"");
  constructor(private stdserv:SubjectService) { }
  showAllSubject(){
   this.stdserv.getAll().subscribe(a=>this.subjectlist=a);
  }
  addNewSubjectt(){
    this.stdserv.addSubject(this.nstd).subscribe(a=>this.subjectlist.push(a));
  }
  getSubjectData(id:number){
    return this.stdserv.getById(id).subscribe(
      a=>this.nstd=a
    )
  }
  DeleteSubject(id:number){
    return this.stdserv.deleteSubject(id).subscribe(
      a=>this.subjectlist.splice((this.subjectlist.findIndex(a=>a.Id==this.nstd.Id)),1)
    )
  }
  EditSubject(std:Subject){
    console.log("Click Update" );
    this.stdserv.updateSubject(this.nstd).subscribe(
      (a)=>{
        console.log("Update",a)
      },
      ()=>{},// Eror
      ()=>this.ngOnInit()// On complter
    );
    


  }
  ngOnInit() {
    this.stdserv.getAll().subscribe(
      (stdList)=>{
        this.subjectlist = stdList
      }
    );
  }

}
