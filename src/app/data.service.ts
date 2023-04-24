import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  json_url = "https://jsonplaceholder.typicode.com/users";

  headers:HttpHeaders;


  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders().set('content-type','application/json');
    
  }
 /* postDataToServer(id:number,username:string){
    return this.http.post(this.json_url,{id,username},{headers:this.headers});
  }
*/
  postDataToNodeServer(id:string,username:string):Observable<any>{
    return this.http.post<any>('api/data',{id,username});
  }

getQuiz():Observable<any[]>{
  return this.http.get<any[]>('api/quiz');
}

createNewUser(value:any):Observable<any>{
  return this.http.post('api/register-user',value);
}

checkLogin(user:any):Observable<boolean>{
  return this.http.post<boolean>('api/check-login', user);
}

addQuestion(quiz:any):Observable<any>{
  return this.http.post<any>('api/add-question',quiz);

}
}
