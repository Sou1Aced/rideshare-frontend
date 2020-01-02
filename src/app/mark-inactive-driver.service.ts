import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkInactiveDriverService {

  // URL
  private url = "http://localhost:8080/users/"
// body to send update data
  private body: string;
// Http options
  private httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
    observe: "response" as "body"
  };




  constructor(private httpClient: HttpClient) { }


getDriverById(str): Observable <any>{
  return this.httpClient.get(this.url + '?id=' + str);
}


// changeDriverIsAccepting(data) {
//   return this.httpClient.post(this.url, data)
// }

changeDriverIsAccepting (userid: number, userName: string, firstName: string, lastName: string, email: string, phoneNumber: string, batch: object, active: boolean, isAccepting: boolean){
    this.body = JSON.stringify({userId:userid, userName:userName, firstName:firstName, lastName:lastName, email:email, phoneNumber:phoneNumber, batch:batch, active:active, isAccepting:isAccepting});
    this.httpClient.put(`${this.url + userid}`,this.body,this.httpOptions).subscribe();
  }

}