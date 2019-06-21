import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';
import {map} from'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
  readonly URL = 'https://e879ccca.ngrok.io';
  constructor(private http:HttpClient) { }

  test(){
    return this.http.get<any>(this.URL+'/test')
    .map((res:Response)=>res.result);
    
  }
  SignUp(form: NgForm){
    return this.http.post(this.URL+'/newuser',JSON.stringify(form.value));
  }
  Login(form: NgForm){
    return this.http.post(this.URL+'/userlogin',JSON.stringify(form.value));
  }
  postFile(fileToUpload: File){
		const formData: FormData = new FormData();
		formData.append('file', fileToUpload, fileToUpload.name);
		return this.http.post(this.URL+'/uploadfile', formData);
  }
  postFile2(){
		return this.http.get(this.URL+'/uploadfile2');
  }
  page(num:Number){
    return this.http.post(this.URL+'/page', {'pagenum':num});
  }
  Search(mySearch:string){
    return this.http.post(this.URL+'/search', {'search':mySearch});
  }
}
