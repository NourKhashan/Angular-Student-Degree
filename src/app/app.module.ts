import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import {Routes} from '@angular/router'
import {RouterModule} from '@angular/router'
import {Route} from '@angular/compiler/src/core'


import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { CustomFormsModule } from 'ng2-validation'


import { StudentlistComponent } from './Student/studentlist/studentlist.component';
import { SubjectlistComponent } from './Subject/subjectlist/subjectlist.component';
import { HeaderComponent } from './Common/header/header.component';
import { ErrorComponent } from './Common/error/error.component';
import { SubjectdegreesComponent } from './Subject/subjectdegrees/subjectdegrees.component';
import { AssSubComponent } from './ass-sub/ass-sub.component';
import { AddstudentstosubjectComponent } from './Subject/addstudentstosubject/addstudentstosubject.component';


const appRoutes:Routes = [
  {path:'', component: StudentlistComponent},
  {path:'Student', component: StudentlistComponent},
  {path:'Subject', component: SubjectlistComponent},
  {path:'SubjectStudent', component: AssSubComponent},
  {path:'Degree', component: SubjectdegreesComponent},

  {path:'**', component: Error}
];




@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    SubjectlistComponent,
    HeaderComponent,
    ErrorComponent,
    SubjectdegreesComponent,
    AssSubComponent,
    AddstudentstosubjectComponent,

  ],
  imports: [
    BrowserModule,
    CustomFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
