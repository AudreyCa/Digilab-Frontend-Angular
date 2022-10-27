import { Injectable } from '@angular/core';
import { GlobalHttpService } from './global-http.service';

@Injectable({
  providedIn: 'root'
})
export class FinderService extends GlobalHttpService {

  getJobs() {
    return this._http.get('/src/helpers/job.ts')
  }
}
