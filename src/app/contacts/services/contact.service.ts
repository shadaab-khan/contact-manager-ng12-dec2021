import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private httpClient: HttpClient) { }

  createContact(formData: any) : any {
    // 1. get the form data from comp ts
    console.log(formData);

    // 2. send the form data to REST API
      // 2.1 What's the REST API endpoint ?
      // 2.2 What's the Http method ?
      // 2.3 What's the REST API client ?

    return this.httpClient.post("https://jsonplaceholder.typicode.com/users",formData)
      .pipe( map((res: any) => { //3. get the response from REST API
        console.log(res);
        return res; //4. send the res to comp ts        
      }));
    
    // throw new Error('Method not implemented.');
  }

  getContacts() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users")
      .pipe(map((res:any)=>{
        console.log(res);
        return res;
      }));
    // throw new Error('Method not implemented.');
  }

}
