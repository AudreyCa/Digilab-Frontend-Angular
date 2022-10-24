import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GlobalHttpService } from './global-http.service';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService extends GlobalHttpService {

  dataUrl = "https://reqres.in/api/users";

  postData (directoryForm: any) : Observable<any> {
    return this._http.post(this.dataUrl,{data: directoryForm})
  }

  // const dialogRef = this._dialog.open(
  //   DirectoryComponent, {
  //     width: "600px",
  //     enterAnimationDuration:'800ms', 
  //     exitAnimationDuration:'800ms', 
  //   });
  // dialogRef.afterclose().subscribe(
  //   responseFromModal => {
  //     let: {name, path,description} = responseFromModal
  //     this._directories.push(new DirectoryComponent(name, path, description))
  //   }
  // )

}
