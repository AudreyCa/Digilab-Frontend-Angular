import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DirectoryService } from './directory.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpService {

  // Attention, ne mettre que le HttpClient
  constructor(protected _http: HttpClient) { }

}
