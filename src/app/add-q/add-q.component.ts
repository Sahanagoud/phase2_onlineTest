import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-q',
  templateUrl: './add-q.component.html',
  styleUrls: ['./add-q.component.css']
})
export class AddQComponent {
  newQuestion = {
    question: '',   
    choices: ['', ''],
    answerIndex:''
  };
  optionValues: string[] = [];

  constructor(private ds:DataService){
    this.optionValues = this.newQuestion.choices.slice();

  }

  addOption() {
    if(this.newQuestion.choices.length<=3)
    {
    this.newQuestion.choices.push('');
    this.optionValues.push('');
    }
  }

  removeOption(index: number) {
    this.newQuestion.choices.splice(index, 1);
    this.optionValues.splice(index, 1);
  }

  addQuestion(questionForm: any) {
  this.newQuestion.choices = this.optionValues.slice(); 

    console.log(this.newQuestion);    
    this.ds.addQuestion(this.newQuestion).subscribe({
      next: data=>alert(data.msg),
      error:err=>alert(err.msg)
    });
    questionForm.resetForm();
    this.newQuestion = {
      question: '',     
      choices: ['', ''],
      answerIndex:''
    };
  }
}
