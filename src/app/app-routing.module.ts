import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { QuizComponent } from './quiz/quiz.component';
import { AddQComponent } from './add-q/add-q.component';
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'registration-form', component: RegistrationFormComponent},
  {path:'login', component: LoginFormComponent},
  {path:'quiz', component: QuizComponent},
  {path:'add-q', component: AddQComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
